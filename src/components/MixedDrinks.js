import React from "react";
import {Container} from "react-bootstrap";
import '../styles/MixedDrinks.css';
import MixedDrinkTypes from "./MixedDrinkTypes";

export default class MixedDrinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mixedDrinkTypesNames: ['Ordinary_Drink', 'Cocktail', 'Shot', 'Coffee / Tea', 'Beer', 'Soft Drink / Soda' ],
        };
    }

    render() {
        return (
            <Container className="containerStyle">
                <MixedDrinkTypes mixedDrinkTypesNames={this.state.mixedDrinkTypesNames} />
            </Container>
        );
    }
}