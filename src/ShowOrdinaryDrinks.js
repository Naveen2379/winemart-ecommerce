import React from 'react';

import {isEmpty} from "lodash";
import {Col, Row, Table} from 'react-bootstrap';
import ComponentSlider from "@kapost/react-component-slider";

import './ShowProducts.css'
//import ShowAllOrdinaryDrinksNew from "./ShowAllOrdinaryDrinksNew";


class ShowOrdinaryDrinks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            listProducts: [],
            showAllOrdDrinks: false
        }
        const renderLeftArrow = () => <i className="fa fa-caret-left"/>
        const renderRightArrow = () => <i className="fa fa-caret-right"/>

        this.showProd = this.showProd.bind(this);
        //this.showAllOrdinaryDrinks = this.showAllOrdinaryDrinks.bind(this);
        //this.showAlOrdDrinks = this.showAlOrdDrinks.bind(this);
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
                listProducts: result,
                showAllOrdDrinks: false,
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
        const componentSlider = <ComponentSlider renderLeftArrow={this.renderLeftArrow}
                                                 renderRightArrow={this.renderRightArrow}>
            {this.state.listProducts.drinks.map(drink => {
                return <div className="menu-item" key={drink.strDrinkThumb}>
                    <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
                    <h5>{drink.strDrink}</h5>
                </div>
            })}
        </ComponentSlider>


        return <div>
            <p>Ordinary Drinks Available <button onClick={() => this.showAllOrdinaryDrinks(this.state.listProducts)}>View All</button></p>
            {componentSlider}
            <div>{this.state.showAllOrdDrinks ?  this.showAlOrdDrinks() : this.state.showAllOrdDrinks}</div>
        </div>
    }

    showAllOrdinaryDrinks(allOrdDrink) {
        console.log('entered...');
        console.log(allOrdDrink);
        this.setState({
            showAllOrdDrinks: true,
            listProducts: allOrdDrink
        })
    }

    showAlOrdDrinks() {
        console.log(this.state.listProducts);
        const showDrinks = <div> {this.state.listProducts.drinks.map(drink => {
            return <div className="menu-item" key={drink.strDrinkThumb}>
                <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
                <h5>{drink.strDrink}</h5>
            </div>
        })}</div>

        return <div>{showDrinks}</div>
    }


}


export default ShowOrdinaryDrinks;