import React from "react";
import MixedDrink_Type from "./MixedDrink_Type";
import {Container} from "react-bootstrap";
import {isEmpty} from "lodash";
import Drinks from "./Drinks";
import '../styles/MixedDrinks.css';
import DrinkPrepHelp from "./DrinkPrepHelp";
import MixedDrink_Types from "./MixedDrink_Types";

export default class MixedDrinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mixedDrinkTypes: ['Ordinary_Drink', 'Cocktail', 'Shot', 'Coffee / Tea', 'Beer', 'Soft Drink / Soda' ],
            drinks: [],
            eachDrinkDetails: []
        };
    }


    backToMixedDrinks = () => {
        this.setState({
            drinks: []
        });
    }

/*    handleDrinkClick = (drinkId) => {
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
    }*/
    /*showMixedDrinks = (mixedDrinkTypes) => {
        return (
            mixedDrinkTypes.map( (mixedDrinkType) => {
                return (
                <div key={mixedDrinkType} className="A300">
                    <MixedDrink_Type mixedDrinkTypeName={mixedDrinkType} showAllDrinks={this.showAllDrinks} handleDrinkClick={this.handleDrinkClick} />
                </div>
            );
        })
        )
    }*/

    render() {
        console.log('mixed drinks');
        const {mixedDrinkTypes, drinks, eachDrinkDetails} = this.state;
        const hasDrinks = !isEmpty(drinks);
        return (
            <Container className="containerStyle">
                {/*{
                    isEmpty(eachDrinkDetails) ?
                    <div>
                        {
                            hasDrinks ? <div className='part-mixed-drinks'>
                                    <button onClick={this.backToMixedDrinks}>{'<<Back'}</button>
                                    <Drinks drinks={drinks} />
                            </div>
                                : <div>{this.showMixedDrinks(mixedDrinkTypes)}</div>
                        }
                    </div> :
                    <div>
                        <DrinkPrepHelp drinkInfo={eachDrinkDetails} />
                    </div>
                }*/}

                <MixedDrink_Types mixedDrinkTypes={this.state.mixedDrinkTypes} />
            </Container>
        );
    }
}