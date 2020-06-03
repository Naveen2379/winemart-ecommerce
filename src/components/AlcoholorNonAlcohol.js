import React from "react";
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import {Button, Row} from "react-bootstrap";

import '../switch.css';
import '../styles/AlcNonAlcMixed.css';

class AlcoholOrNonAlcohol extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            isChecked: false,
            showAlcDrinks: false,
            showNonAlcDrinks: true,
            listProducts: [],
            products: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.showDrinks = this.showDrinks.bind(this);
        this.showAlcoholicDrinks = this.showAlcoholicDrinks.bind(this);
        this.showNonAlcoholicDrinks = this.showNonAlcoholicDrinks.bind(this);
        this.showAlcNonAlcDrinks = this.showAlcNonAlcDrinks.bind(this);
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
                <h4>Non Alcoholic Drinks</h4>
                <label>
                    <input ref="switch" checked={ this.state.isChecked } onChange={ this.handleChange } className="switch" type="checkbox" />
                    <div>
                        <div></div>
                    </div>
                </label>
                <h4>Alcoholic Drinks</h4>
            </div>
            <div>
                <div>{this.state.showAlcDrinks ? (this.state.isChecked ? this.showAlcoholicDrinks() : '') : ''}</div>
                <div>{this.state.showNonAlcDrinks ? (this.state.isChecked ? this.showNonAlcoholicDrinks() : '') : ''}</div>
                <div>{this.state.isLoaded ? this.showDrinks() : ''}</div>
            </div>

        </div>
    }

    showAlcNonAlcDrinks() {
        console.log("it's in showAlcNonAlcDrinks");
    }
    showDrinks() {
        console.log("AlcoholorNonAlcoholpage - it's in showDrinks");
        //console.log(this.state.listProducts);
        //console.log(this.state.showAlcDrinks);
        const showDrinks = <div className="showDrinksAlcNonAlc"> <h4>{this.alcNonAlc}</h4>
            {this.state.listProducts.drinks.map(drink => {
                return <div className="menu-item" key={drink.strDrinkThumb}>
                    <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
                    <h5>{drink.strDrink}</h5>
                </div>
            })}</div>;
        return <div>{showDrinks}</div>
    }

    showAlcoholicDrinks() {
        console.log('AlcoholorNonAlcoholpage - showAlcoholicDrinks');
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
                    }); console.log('after setting state');
                    console.log(this.state.isLoaded);

                })
                .catch(err => {
                    console.log(err);
                });
            if(this.state.isLoaded === true){
                console.log('AlcoholorNonAlcoholpage - after setting state showAlcoholicDrinks');
            }
        console.log('AlcoholorNonAlcoholpage - showAlcoholicDrinks');
        //this.props.showAlcNonAlc();
    }

    showNonAlcoholicDrinks() {
        console.log('AlcoholorNonAlcoholpage - showNonAlcoholicDrinks');
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
                        isChecked: false,
                        showNonAlcDrinks: true
                    });

                })
                .catch(err => {
                    console.log(err);
                });
    }
}

export default AlcoholOrNonAlcohol;