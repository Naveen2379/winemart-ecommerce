import React from "react";
import {isEmpty} from "lodash";
import DrinkPrepHelp from "./DrinkPrepHelp";
import '../styles/Drinks.css';
import '../App.css';
import {Figure} from "react-bootstrap";
import FigureCaption from "react-bootstrap/FigureCaption";
import Drink from "./Drink";

export default class Drinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eachDrinkDetails: []
        }
    }

    handleDrinkClick = (drinkId) => {
        console.log(this.state.eachDrinkDetails);
        console.log('drink clicked');
        const fetchUrl = "https://the-cocktail-db.p.rapidapi.com/lookup.php?i=" + drinkId + "";
        return fetch(fetchUrl, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "0f95de4865msh72bc273490c401cp149a69jsn898244e5583b"
            }
        })
            .then(response => response.json())
            .then((drinkDtls) => {
                console.log(drinkDtls);
                this.setState({
                    eachDrinkDetails: drinkDtls.drinks[0]
                }, () => this.state.eachDrinkDetails);
            });
    }

    showMixedDrinksType = (drinks) => {
         return drinks.map( (drinkDetails) => {
            return (
                <React.Fragment key={drinkDetails.idDrink}>
                    <Drink drinkDetails={drinkDetails} handleDrinkClick={this.handleDrinkClick} />
                </React.Fragment>
            )});
    }
    render() {
        console.log('Drinks');
        const { eachDrinkDetails } = this.state;
        const drinks = this.props.drinks;
        console.log(drinks)
        const hasDrinks = !isEmpty(this.props.drinks);
        const hasEachDrinkDetails = !isEmpty(eachDrinkDetails);

        return (
            <div>
                { hasEachDrinkDetails ? <DrinkPrepHelp drinkInfo={eachDrinkDetails} /> :
                    hasDrinks ? <React.Fragment>{this.showMixedDrinksType(drinks)}</React.Fragment>
                    : ''}
            </div>
        )
    }

}