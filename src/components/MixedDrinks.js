import React from "react";
import  {Container, Row, Col} from 'react-grid-system'

import '../styles/MixedDrinks.css';

import ShowOrdinaryDrinks from "./ShowOrdinaryDrinks";
import ShowCocktails from "./ShowCocktails";
import ShowShots from "./ShowShots";
import ShowCoffeeTea from "./ShowCoffeeTea";
import ShowBeers from "./ShowBeers";
import ShowSoftDrinkSoda from "./ShowSoftDrinkSoda";

class MixedDrinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMixedDrinks: true,
            showOrdDrinks: true,
            showCocktailDrinks: true,
            showShots: true,
            showCoffeeTeas: true,
            showBeers: true,
            showSoftDrinkSodas: true,
            showAlcNonAlcDrinks: true,
        };
        this.showingOrdDrink = this.showingOrdDrink.bind(this);
        this.showingCocktail = this.showingCocktail.bind(this);
        this.showingShots = this.showingShots.bind(this);
        this.showingCoffeeTeas = this.showingCoffeeTeas.bind(this);
        this.showingBeers = this.showingBeers.bind(this);
        this.showingSoftDrinkSoda = this.showingSoftDrinkSoda.bind(this);
        this.showingHomePage = this.showingHomePage.bind(this);
        this.showDrinks = this.showDrinks.bind(this);
    }

    showDrinks() {
        const mixedDrinks = <Container className="containerStyle">
            <Row className="A300">
                <Col className="componentsStyle" sm={10}>
                    <div className="A3100">
                        {this.state.showOrdDrinks ? <ShowOrdinaryDrinks isShowing={this.showingOrdDrink} showHomePage={this.showingHomePage} /> : ''}
                    </div>
                    <div className="A3200">
                        {this.state.showCocktailDrinks ? <ShowCocktails isShowing={this.showingCocktail} showHomePage={this.showingHomePage} /> : ''}
                    </div>
                    <div className="A3300">
                        {this.state.showShots ? <ShowShots isShowing={this.showingShots} showHomePage={this.showingHomePage} /> : ''}
                    </div>
                    <div className="A3400">
                        {this.state.showCoffeeTeas ? <ShowCoffeeTea isShowing={this.showingCoffeeTeas} showHomePage={this.showingHomePage} /> : ''}
                    </div>
                    <div className="A3500">
                        {this.state.showBeers ? <ShowBeers isShowing={this.showingBeers} showHomePage={this.showingHomePage} /> : ''}
                    </div>
                    <div className="A3600">
                        {this.state.showSoftDrinkSodas ? <ShowSoftDrinkSoda isShowing={this.showingSoftDrinkSoda} showHomePage={this.showingHomePage} /> : ''}
                    </div>
                </Col>
            </Row>
        </Container>
        return <div>{mixedDrinks}</div>
    }

    render() {
        console.log('mixed', this.props.keyType);
        return <div>{this.state.showMixedDrinks ? this.showDrinks() : ''}</div>
    }

    showingHomePage() {
        this.setState({
            showMixedDrinks: true,
            showOrdDrinks: true,
            showCocktailDrinks: true,
            showShots: true,
            showCoffeeTeas: true,
            showBeers: true,
            showSoftDrinkSodas: true,
        });
    }

    showingOrdDrink() {
        this.setState({
            showOrdDrinks: true,
            showCocktailDrinks: false,
            showShots: false,
            showCoffeeTeas: false,
            showBeers: false,
            showSoftDrinkSodas: false

        });
    }

    showingCocktail() {
        this.setState({
            showOrdDrinks: false,
            showCocktailDrinks: true,
            showShots: false,
            showCoffeeTeas: false,
            showBeers: false,
            showSoftDrinkSodas: false
        });
    }

    showingShots() {
        this.setState({
            showOrdDrinks: false,
            showCocktailDrinks: false,
            showShots: true,
            showCoffeeTeas: false,
            showBeers: false,
            showSoftDrinkSodas: false

        });
    }

    showingCoffeeTeas() {
        this.setState({
            showOrdDrinks: false,
            showCocktailDrinks: false,
            showShots: false,
            showCoffeeTeas: true,
            showBeers: false,
            showSoftDrinkSodas: false

        });
    }

    showingBeers() {
        this.setState({
            showOrdDrinks: false,
            showCocktailDrinks: false,
            showShots: false,
            showCoffeeTeas: false,
            showBeers: true,
            showSoftDrinkSodas: false
        });
    }

    showingSoftDrinkSoda() {
        this.setState({
            showOrdDrinks: false,
            showCocktailDrinks: false,
            showShots: false,
            showCoffeeTeas: false,
            showBeers: false,
            showSoftDrinkSodas: true
        });
    }
}

export default MixedDrinks;