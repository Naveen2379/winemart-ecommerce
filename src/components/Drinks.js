import React from "react";
import {isEmpty} from "lodash";
import DrinkPrepHelp from "./DrinkPrepHelp";
import '../styles/Drinks.css';
import '../App.css';
import Drink from "./Drink";

export default class Drinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eachDrinkDetails: []
        }
    }

    handleDrinkClick = (drinkId) => {
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
                this.setState({
                    eachDrinkDetails: drinkDtls.drinks[0],
                });
            });
    }

    showAllDrinks = (drinks) => {
         return drinks.map( (drinkDetails) => {
            return (
                <Drink key={drinkDetails.idDrink} drinkDetails={drinkDetails} handleDrinkClick={this.handleDrinkClick} />
            )});
    }

    backToViewAllState = () => {
        this.setState({
            eachDrinkDetails: []
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(!isEmpty(prevState.eachDrinkDetails)) {
            this.setState({
                eachDrinkDetails: []
            })
        }
    }

    render() {
        const { eachDrinkDetails } = this.state;
        const drinks = this.props.drinks;
        const hasDrinks = !isEmpty(this.props.drinks);
        const hasEachDrinkDetails = !isEmpty(eachDrinkDetails);

        return (
            <React.Fragment>
                { hasEachDrinkDetails ? <React.Fragment>
                        <DrinkPrepHelp drinkInfo={eachDrinkDetails} />
                </React.Fragment> :
                    <React.Fragment>{hasDrinks ? <React.Fragment>{this.showAllDrinks(drinks)}</React.Fragment> : ''}</React.Fragment>
                }
            </React.Fragment>
        )
    }

}