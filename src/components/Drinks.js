import React from "react";
import {isEmpty} from "lodash";
import DrinkPrepHelp from "./DrinkPrepHelp";
import '../styles/Drinks.css';
import '../App.css';
import {Figure} from "react-bootstrap";
import FigureCaption from "react-bootstrap/FigureCaption";
import {Drink} from "./Drink";

export default class Drinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eachDrinkDetails: []
        }
        this.handleDrinkClick = this.handleDrinkClick.bind(this);
    }
    handleDrinkClick(drinkId) {
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
            .then(response => {
                return response.json();
            })
            .then((drinkDtls) => {
                console.log(drinkDtls);
                this.setState({
                    eachDrinkDetails: drinkDtls.drinks[0]
                }, () => this.state.eachDrinkDetails);
            });
    }

    render() {
        const drinks = this.props.drinks;
        const showAllDrinks = drinks.map( (drinkDetails) => {
            return (<React.Fragment key={drinkDetails.idDrink}>
                    <Drink drinkDetails={drinkDetails} handleDrinkClick={this.handleDrinkClick} />
            </React.Fragment>
            )});
        return (
            <div>
                {isEmpty(this.state.eachDrinkDetails) ? <React.Fragment>{showAllDrinks}</React.Fragment> : <DrinkPrepHelp drinkInfo={this.state.eachDrinkDetails} />}
            </div>
        )
    }

}