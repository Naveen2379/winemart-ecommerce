import React from 'react';

import {isEmpty} from "lodash";
import {Col, Row, Table} from 'react-bootstrap';
import ComponentSlider from "@kapost/react-component-slider";

import './ShowProducts.css'
//import ShowCocktailDrinks from "./ShowCocktailDrinks";


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
        const componentSlider = <ComponentSlider renderLeftArrow={this.renderLeftArrow}
                                                 renderRightArrow={this.renderRightArrow}>
            {this.state.listProducts.drinks.map(drink => {
                return <div className="menu-item" key={drink.strDrinkThumb}>
                    <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
                    <h5>{drink.strDrink}</h5>
                </div>
            })}
        </ComponentSlider>


        return  <div>
                <div>{this.state.showAllOrdDrinks ? null : <h4>Ordinary Drinks Available <button key={this.state.listProducts} onClick={this.showAllOrdinaryDrinks.bind(this, this.state.listProducts)}>View All</button></h4> }</div>
                <div>{this.state.showAllOrdDrinks ? null : componentSlider }</div>
                <div>{this.state.showAllOrdDrinks ?  this.showAlOrdDrinks() : ''}</div>
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
        const showDrinks = <div> <h4><button key={this.state.listProducts} onClick={this.goBackToOrdDrinks.bind(this, this.state.listProducts)}>Back</button> All Available Ordinary Drinks</h4>
            {this.state.listProducts.drinks.map(drink => {
            return <div className="menu-item" key={drink.strDrinkThumb}>
                <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
                <h5>{drink.strDrink}</h5>
            </div>
        })}</div>

        return <div>{showDrinks}</div>

    }

    goBackToOrdDrinks(ordDrinks) {
        this.setState({
            showAllOrdDrinks: false,
            listProducts: ordDrinks
        })
    }

}


export default ShowOrdinaryDrinks;