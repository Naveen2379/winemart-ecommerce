import React from "react";
import MixedDrink_Type from "./MixedDrink_Type";
import {Container} from "react-bootstrap";
import {isEmpty} from "lodash";
import Drinks from "./Drinks";
import '../styles/MixedDrinks.css';
import DrinkPrepHelp from "./DrinkPrepHelp";

export default class MixedDrinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            availableDrinksNames: ['Ordinary_Drink', 'Cocktail', 'Shot', 'Coffee / Tea', 'Beer', 'Soft Drink / Soda' ],
            drinks: [],
            eachDrinkDetails: []
        };
        this.showAllDrinks = this.showAllDrinks.bind(this);
        this.showMixedDrinks = this.showMixedDrinks.bind(this);
        this.handleDrinkClick = this.handleDrinkClick.bind(this);
    }

    showAllDrinks(drinks) {
        console.log(drinks);
        const mixedDrink_type_details = drinks;
        this.setState({
            drinks: mixedDrink_type_details
        });
    }

    showMixedDrinks() {
        this.setState({
            drinks: []
        });
    }

    handleDrinkClick(drinkId) {
        console.log('handle drink click');
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
                this.setState({
                    eachDrinkDetails: drinkDtls.drinks[0]
                }, () => this.state.eachDrinkDetails);
            });
    }

    render() {
        const drinksNames = this.state.availableDrinksNames;
        const mixed_drinks = drinksNames.map( (drinkTypeName) => {
            return (
                <div key={drinkTypeName} className="A300">
                    <MixedDrink_Type drinkTypeName={drinkTypeName} showAllDrinks={this.showAllDrinks} handleDrinkClick={this.handleDrinkClick} />
                </div>
            );
        });

        return (
            <Container className="containerStyle">
                {isEmpty(this.state.eachDrinkDetails) ?
                    <div>
                        {isEmpty(this.state.drinks) ? <div>{mixed_drinks}</div> :
                            <div className='part-mixed-drinks'>
                                <button onClick={this.showMixedDrinks}>{'<<Back'}</button>
                                <Drinks drinks={this.state.drinks} />
                            </div>
                        }
                    </div> :
                    <div>
                        <DrinkPrepHelp drinkInfo={this.state.eachDrinkDetails} />
                    </div>}
            </Container>
        );
    }
}