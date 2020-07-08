import React from "react";
import {isEmpty} from "lodash";
import DrinkPrepHelp from "./DrinkPrepHelp";
import '../styles/Drinks.css';
import '../App.css';
import {Figure} from "react-bootstrap";
import FigureCaption from "react-bootstrap/FigureCaption";
import {FetchDrinkDetails} from "./FetchDrinkDetails";

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
                return this.setState({
                    eachDrinkDetails: drinkDtls.drinks[0]
                }, () => this.state.eachDrinkDetails);
            });
    }

    render() {
        const drinks = this.props.drinks;
        const showAllDrinks = drinks.map( (drinkDetails) => {
            return (
            <Figure key={drinkDetails.strDrink} onClick={() => this.handleDrinkClick(drinkDetails.idDrink)} >
                <img height="150px" width="150px" src={drinkDetails.strDrinkThumb} alt="drinkImage"/>
                <FigureCaption>
                    <b>{drinkDetails.strDrink}</b>
                    <h6>Cost: {Math.floor(Math.random()*(1000-500)+500)} ₹</h6>
                </FigureCaption>
            </Figure>
        )});
        return (
            <div>
                {isEmpty(this.state.eachDrinkDetails) ? <React.Fragment>{showAllDrinks}</React.Fragment> : <DrinkPrepHelp drinkInfo={this.state.eachDrinkDetails} />}
            </div>
        )
    }

}