import React, {Component, isValidElement, useState} from "react";

import '../styles/AlcoholOrNonAlcohol.css';
import '../styles/AlcNonAlcMixed.css'
import {isEmpty} from "lodash";
import Drinks from "./Drinks";

export const fetchDrinks = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                drinks: [],
            };
        }

        componentDidMount() {
            const {drinksType} = this.props;
            fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?a="+drinksType+"", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                    "x-rapidapi-key": "0f95de4865msh72bc273490c401cp149a69jsn898244e5583b"
                }
            }).then(response => response.json())
                .then(result => {
                    this.setState({
                        drinks: result.drinks,
                        showSelectedDrink: false
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        }

        render() {
            const {drinks} = this.state;
            return (
                    <WrappedComponent drinks={drinks} />
            )
        }
    }
}
