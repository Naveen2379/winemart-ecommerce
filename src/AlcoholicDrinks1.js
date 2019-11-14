import React, {useState} from "react";
import './AlcoholOrNonAlcohol.css';
import './AlcNonAlcMixed.css'
import { Tabs, Tab } from "react-bootstrap";
import {Row} from "react-grid-system";
import {isEmpty} from "lodash";

class AlcoholicDrinks1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowingAlc: false,
            listProducts: [],
            isLoaded: false,
            isClicked: false,
            eachDrinkDetails: []
        };
        this.handleAlcohol = this.handleAlcohol.bind(this);
        this.showAlc = this.showAlc.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.showDrinkDetails = this.showDrinkDetails.bind(this);
    }

    showDrinkDetails(result) {
        //console.log(result);
        const drinkDet = [];
            result.drinks.map(eachDrink => {
            const fetchDrinkId = eachDrink.idDrink;
            const fetchUrl = "https://the-cocktail-db.p.rapidapi.com/lookup.php?i=" + fetchDrinkId + "";
            fetch(fetchUrl, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                    "x-rapidapi-key": "0f95de4865msh72bc273490c401cp149a69jsn898244e5583b"
                }
            })
                .then(response => response.json())
                .then((eachDrinkDtls) =>  {
                        console.log(eachDrinkDtls.drinks);
                        const eachDrink = eachDrinkDtls.drinks;
                        drinkDet.push(eachDrink);
                        return (eachDrink);
                    })
            });

            this.setState({
                eachDrinkDetails: drinkDet
            });
            console.log(this.state.eachDrinkDetails);

        this.setState({
            isLoaded: true,
            isShowingAlc: !this.state.isShowingAlc,
            listProducts: result
        });
    }

    handleAlcohol() {
        fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?a=Alcoholic", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "0f95de4865msh72bc273490c401cp149a69jsn898244e5583b"
            }
        })
            .then(response => response.json())
            .then(this.showDrinkDetails)
    }

    handleClick() {
        console.log('handleClick');
        console.log(this.state.listProducts);
        console.log(this.state.eachDrinkDetails);
        this.setState({
            isClicked: !this.state.isClicked
        })

    }

    render() {
        return <div>
            <div>{this.state.isShowingAlc ?  '' : this.handleAlcohol()}</div>
            <div>{this.state.isLoaded ?  this.showAlc(this.state.listProducts) : ''}</div>
        </div>
    }

    showAlc(products) {
        const elements = <div>
            <p>THis is Alocholic Drink Description................</p>
            <p>THis is Alocholic Drink Description................</p>
            <p>THis is Alocholic Drink Description................</p>
            <p>THis is Alocholic Drink Description................</p>
        </div>
        const showDrinks = <div className="showDrinksAlcNonAlc">
            <h4>Alcohol Drinks</h4>
            {products.drinks.map(drink => {
                return <div className="menu-item" onClick={this.handleClick} key={drink.strDrinkThumb}>
                    <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
                    <h5>{drink.strDrink}</h5>
                    <h6>Cost: ₹599/-</h6>
                </div>
            })}</div>;
        return <div>
            <div>{this.state.isClicked ? '' : showDrinks}</div>
            <div>{this.state.isClicked ? elements : ''}</div>
            </div>
    }


}

export default AlcoholicDrinks1;