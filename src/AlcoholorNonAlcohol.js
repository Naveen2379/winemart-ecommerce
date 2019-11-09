import React from "react";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import {Button} from "react-bootstrap";

import './switch.css'

class AlcoholOrNonAlcohol extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            isChecked: false,
            showAlcDrinks: false,
            showNonAlcDrinks: true,
            listProducts: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.showDrinks = this.showDrinks.bind(this);
        this.showAlcoholicDrinks = this.showAlcoholicDrinks.bind(this);
        this.showNonAlcoholicDrinks = this.showNonAlcoholicDrinks.bind(this);
    }

    handleChange() {
        if(this.state.showAlcDrinks === false && this.state.showNonAlcDrinks === true) {
            console.log('its in alcoholic store');
            this.setState( {
                isChecked: !this.state.isChecked,
                showAlcDrinks: true,
                showNonAlcDrinks: false
            });
        }
        else {
            console.log('its in non alcoholic store');
            this.setState( {
                isChecked: this.state.isChecked,
                showAlcDrinks: false,
                showNonAlcDrinks: true
            });
        }
    }
    render() {
        return <div>
            <div className="switch-container">
                <label>
                    <input ref="switch" checked={ this.state.isChecked } onChange={ this.handleChange } className="switch" type="checkbox" />
                    <div>
                        <div></div>
                    </div>
                </label>
            </div>
            <div>{this.state.showAlcDrinks ? (this.state.isChecked ? this.showAlcoholicDrinks() : '') : ''}</div>
            <div>{this.state.showNonAlcDrinks ? (this.state.isChecked ? this.showNonAlcoholicDrinks() : '') : ''}</div>
            <div>{this.state.isLoaded ? this.showDrinks() : ''}</div>
        </div>
    }

    showDrinks() {
        //console.log(this.state.isChecked);
        const showDrinks = <div> <h4 className="h4Style"></h4>
            {this.state.listProducts.drinks.map(drink => {
                return <div className="menu-item" key={drink.strDrinkThumb}>
                    <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
                    <h5>{drink.strDrink}</h5>
                </div>
            })}</div>
        return <div>{showDrinks}</div>
    }

    showAlcoholicDrinks() {
        console.log('showAlcoholicDrinks');
        console.log(this.state.isChecked);
        //https://the-cocktail-db.p.rapidapi.com/filter.php?a=Alcoholic
            fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?a=Alcoholic", {
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
                        showAlcDrinks: false

                    });

                })
                .catch(err => {
                    console.log(err);
                });
    }

    showNonAlcoholicDrinks() {
        console.log('showNonAlcoholicDrinks');
        console.log(this.state.isChecked);
        //https://the-cocktail-db.p.rapidapi.com/filter.php?a=Non%20Alcoholic
            fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?a=Non%20Alcoholic", {
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
                        showNonAlcDrinks: false
                    });

                })
                .catch(err => {
                    console.log(err);
                });
    }
}

export default AlcoholOrNonAlcohol;