import React from "react";
import MixedDrink_Type from "./MixedDrink_Type";
import {Container} from "react-bootstrap";
import {isEmpty} from "lodash";
import Drinks from "./Drinks";
import '../styles/MixedDrinks.css';

export default class MixedDrinks_Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            availableDrinksNames: ['Ordinary_Drink', 'Cocktail', 'Shot', 'Coffee / Tea', 'Beer', 'Soft Drink / Soda' ],
            drinks: [],
        };
        this.showAllDrinks = this.showAllDrinks.bind(this);
        this.showMixedDrinks = this.showMixedDrinks.bind(this);
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

    render() {
        const drinksNames = this.state.availableDrinksNames;
        const mixed_drinks = drinksNames.map( (drinkTypeName) => {
            return (
                <div key={drinkTypeName} className="A300">
                    <MixedDrink_Type drinkTypeName={drinkTypeName} showAllDrinks={this.showAllDrinks} />
                </div>
            );
        });

        return (
            <Container className="containerStyle">
                {isEmpty(this.state.drinks) ? <div>{mixed_drinks}</div>
                    : <div className='part-mixed-drinks'>
                        <button onClick={this.showMixedDrinks}>{'<<Back'}</button>
                        <Drinks drinks={this.state.drinks} />
                    </div>}
            </Container>
        );
    }
}