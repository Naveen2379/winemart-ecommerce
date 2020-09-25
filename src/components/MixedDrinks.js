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
            mixedDrinkTypesNames: ['Ordinary_Drink', 'Cocktail', 'Shot', 'Coffee / Tea', 'Beer', 'Soft Drink / Soda' ],
        };
    }

    render() {
        console.log('MixedDrinks');
        return (
            <Container className="containerStyle">
                <MixedDrink_Types mixedDrinkTypesNames={this.state.mixedDrinkTypesNames} />
            </Container>
        );
    }
}