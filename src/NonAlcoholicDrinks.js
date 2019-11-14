import React, {useState} from "react";
import './AlcoholOrNonAlcohol.css';
import './AlcNonAlcMixed.css'
import { Tabs, Tab } from "react-bootstrap";
import {Row} from "react-grid-system";

class NonAlcoholicDrinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowingAlc: false,
            isShowingNonAlc: false,
            isShowingMixedDrinks: false,
            listProducts: [],
            isLoaded: false
        };
        this.handleNonAlcohol = this.handleNonAlcohol.bind(this);
        this.showNonAlc = this.showNonAlc.bind(this);

    }


    handleNonAlcohol() {
        fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?a=Non%20Alcoholic", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "0f95de4865msh72bc273490c401cp149a69jsn898244e5583b"
            }
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({
                    isLoaded: true,
                    isShowingNonAlc: !this.state.isShowingNonAlc,
                    listProducts: result
                });

            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        console.log('Non AlcoholicDrinks');
        return <div>
            <div>{this.state.isShowingNonAlc ?  '' : this.handleNonAlcohol()}</div>
            <div>{this.state.isLoaded ?  this.showNonAlc(this.state.listProducts) : ''}</div>
        </div>
    }


    showNonAlc(products) {
        const showDrinks = <div className="showDrinksAlcNonAlc"><h4>Non Alcohol Drinks</h4>
            {products.drinks.map(drink => {
                return <div className="menu-item" key={drink.strDrinkThumb}>
                    <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
                    <h5>{drink.strDrink}</h5>
                    <h6>Cost: ₹599/-</h6>
                </div>
            })}</div>;
        return <div>{showDrinks}</div>
    }
}

export default NonAlcoholicDrinks;