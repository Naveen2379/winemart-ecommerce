import React, {useState} from "react";
import  {Container, Row, Col} from 'react-grid-system'

import './styles/MixedDrinks.css';

import ShowOrdinaryDrinks from "./components/ShowOrdinaryDrinks";
import ShowCocktails from "./components/ShowCocktails";
import ShowShots from "./components/ShowShots";
import ShowCoffeeTea from "./components/ShowCoffeeTea";
import ShowBeers from "./components/ShowBeers";
import ShowSoftDrinkSoda from "./components/ShowSoftDrinkSoda";
import AlcoholOrNonAlcohol from "./components/AlcoholorNonAlcohol";
import RouteToAlcohol from './components/RouteToAlcohol';
import HomePage from "./components/HomePage";
import {Tab, Tabs} from "react-bootstrap";

class Homepage_Old extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showHomepage: false,
            isShowingOrdDrink: false,
            isShowingCocktail: false,
            isShowingShots: false,
            isShowingCoffeeTeas: false,
            isShowingBeers: false,
            isShowingSoftDrinkSoda: false,
            isShowingAlcNonAlc: false,
            isShowingFilter: false
        };
        this.showingOrdDrink = this.showingOrdDrink.bind(this);
        this.showingCocktail = this.showingCocktail.bind(this);
        this.showingShots = this.showingShots.bind(this);
        this.showingCoffeeTeas = this.showingCoffeeTeas.bind(this);
        this.showingBeers = this.showingBeers.bind(this);
        this.showingSoftDrinkSoda = this.showingSoftDrinkSoda.bind(this);
        this.showingHomePage = this.showingHomePage.bind(this);
        this.homePageInitial = this.homePageInitial.bind(this);
        this.showAlcOrNonAlc = this.showAlcOrNonAlc.bind(this);
    }

    homePageInitial() {
        const homePage = <Container className="containerStyle">
            <Row className="A100">
                <h3 className="header1">Cocktail WineMart</h3>
            </Row>
            <Row className="A200">
                <HomePage />
            </Row>
            <Row className="A300">
                <Col className="filterSideBar" sm={2}>{this.state.isShowingFilter ? '' :  <p>Filter</p>}</Col>
                <Col className="componentsStyle" sm={10}>
                    <div className="A3100">
                        {this.state.isShowingOrdDrink ? '' : <ShowOrdinaryDrinks isShowing={this.showingOrdDrink} showHomePage={this.showingHomePage} />}
                    </div>
                    <div className="A3200">
                        {this.state.isShowingCocktail ? '' : <ShowCocktails isShowing={this.showingCocktail} showHomePage={this.showingHomePage}/>}
                    </div>
                    <div className="A3300">
                        {this.state.isShowingShots ? '' : <ShowShots isShowing={this.showingShots} showHomePage={this.showingHomePage} />}
                    </div>
                    <div className="A3400">
                        {this.state.isShowingCoffeeTeas ? '' : <ShowCoffeeTea isShowing={this.showingCoffeeTeas} showHomePage={this.showingHomePage} />}
                    </div>
                    <div className="A3500">
                        {this.state.isShowingBeers ? '' : <ShowBeers isShowing={this.showingBeers} showHomePage={this.showingHomePage} />}
                    </div>
                    <div className="A3600">
                        {this.state.isShowingSoftDrinkSoda ? '' : <ShowSoftDrinkSoda isShowing={this.showingSoftDrinkSoda} showHomePage={this.showingHomePage} />}
                    </div>
                </Col>
            </Row>
        </Container>

        return <div>{homePage}</div>
    }

    render() {
        return <div>{this.state.showHomepage ? '' : this.homePageInitial()}</div>
    }


    showAlcOrNonAlc() {
        console.log('show homepage');
        console.log(this.state.isShowingOrdDrink);
        this.setState({
            isShowingAlcNonAlc: false,
            isShowingOrdDrink: true,
            isShowingCocktail: true,
            isShowingShots: true,
            isShowingCoffeeTeas: true,
            isShowingBeers: true,
            isShowingSoftDrinkSoda: true,
            isShowingFilter: true
        });
        console.log(this.state.isShowingOrdDrink);
    }

    showingHomePage() {
        this.setState({
            showHomepage: false,
            isShowingOrdDrink: false,
            isShowingCocktail: false,
            isShowingShots: false,
            isShowingCoffeeTeas: false,
            isShowingBeers: false,
            isShowingSoftDrinkSoda: false,
        })
    }

    showingOrdDrink() {
        console.log('homepage showing ordinary drinks');
        this.setState({
            isShowingOrdDrink: false,
            isShowingCocktail: true,
            isShowingShots: true,
            isShowingCoffeeTeas: true,
            isShowingBeers: true,
            isShowingSoftDrinkSoda: true

        });
        console.log('shown homepage');
    }

    showingCocktail() {
        this.setState({
            isShowingOrdDrink: true,
            isShowingCocktail: false,
            isShowingShots: true,
            isShowingCoffeeTeas: true,
            isShowingBeers: true,
            isShowingSoftDrinkSoda: true

        });
    }

    showingShots() {
        this.setState({
            isShowingOrdDrink: true,
            isShowingCocktail: true,
            isShowingShots: false,
            isShowingCoffeeTeas: true,
            isShowingBeers: true,
            isShowingSoftDrinkSoda: true

        });
    }

    showingCoffeeTeas() {
        this.setState({
            isShowingOrdDrink: true,
            isShowingCocktail: true,
            isShowingShots: true,
            isShowingCoffeeTeas: false,
            isShowingBeers: true,
            isShowingSoftDrinkSoda: true

        });
    }

    showingBeers() {
        this.setState({
            isShowingOrdDrink: true,
            isShowingCocktail: true,
            isShowingShots: true,
            isShowingCoffeeTeas: true,
            isShowingBeers: false,
            isShowingSoftDrinkSoda: true

        });
    }

    showingSoftDrinkSoda() {
        this.setState({
            isShowingOrdDrink: true,
            isShowingCocktail: true,
            isShowingShots: true,
            isShowingCoffeeTeas: true,
            isShowingBeers: true,
            isShowingSoftDrinkSoda: false

        });
    }
}



export default Homepage_Old;