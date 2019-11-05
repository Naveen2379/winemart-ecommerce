import React from 'react';

import {isEmpty} from "lodash";
import {Col, Row, Table} from 'react-bootstrap';
import ComponentSlider from "@kapost/react-component-slider";

import './ShowProducts.css'
import ShowAllOrdinaryDrinksNew from "./ShowAllOrdinaryDrinksNew";


class ShowOrdinaryDrinks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            listProducts: []
        }
        const renderLeftArrow = () => <i className="fa fa-caret-left"/>
        const renderRightArrow = () => <i className="fa fa-caret-right"/>

        this.showProd = this.showProd.bind(this);
        this.showAllOrdinaryDrinks = this.showAllOrdinaryDrinks.bind(this);
    }

    componentDidMount() {
        fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?c=Ordinary_Drink", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "0f95de4865msh72bc273490c401cp149a69jsn898244e5583b"
            }
        })
            .then(response => response.json())
            .then(result => {console.log(result);
            this.setState({
                isLoaded: true,
                listProducts: result
                });

            })
            .catch(err => {
                console.log(err);
            });
    }



    render() {
        return <div>{isEmpty(this.state.listProducts) ? "" : this.showProd()}</div>
    }



    showProd() {
        return <div>
            <p>Ordinary Drinks Available <button onClick={this.showAllOrdinaryDrinks}>View All</button></p>
            <ComponentSlider renderLeftArrow={this.renderLeftArrow}
                             renderRightArrow={this.renderRightArrow}>
                {this.state.listProducts.drinks.map(drink => {
                    return <div className="menu-item" key={drink.strDrinkThumb}>
                        <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
                        <h5>{drink.strDrink}</h5>
                    </div>
                })}
        </ComponentSlider>
        </div>
    }

    showAllOrdinaryDrinks(products) {
        console.log('entered...');
        return <ShowAllOrdinaryDrinksNew />
    }
}

/*function ShowAllOrdinaryDrinksNew() {
    console.log('ShowAllOrdinaryDrinksNew');
    return <p>ShowAllOrdinaryDrinksNew</p>

    this.setState({
        isLoaded: true,
        listProducts: null
    })
    return <div>{this.state.listProducts.drinks.map(drink => {
        return <div className="menu-item" key={drink.strDrinkThumb}>
            <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
            <h5>{drink.strDrink}</h5>
        </div>
    })}</div>*/
}



export default ShowOrdinaryDrinks;