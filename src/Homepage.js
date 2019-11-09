import React from "react";
import  {Container, Row, Col} from 'react-grid-system'

import './HomePage.css';

import ShowOrdinaryDrinks from "./ShowOrdinaryDrinks";
import ShowCocktails from "./ShowCocktails";
import ShowShots from "./ShowShots";
import ShowCoffeeTea from "./ShowCoffeeTea";
import ShowBeers from "./ShowBeers";
import ShowSoftDrinkSoda from "./ShowSoftDrinkSoda";

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showHomepage: false,
            isShowingOrdDrink: false,
            isShowingCocktail: false,
            isShowingShots: false,
            isShowingCoffeeTeas: false,
            isShowingBeers: false,
            isShowingSoftDrinkSoda: false
        };
        this.showingOrdDrink = this.showingOrdDrink.bind(this);
        this.showingCocktail = this.showingCocktail.bind(this);
        this.showingShots = this.showingShots.bind(this);
        this.showingCoffeeTeas = this.showingCoffeeTeas.bind(this);
        this.showingBeers = this.showingBeers.bind(this);
        this.showingSoftDrinkSoda = this.showingSoftDrinkSoda.bind(this);
        this.showingHomePage = this.showingHomePage.bind(this);
        this.homePageInitial = this.homePageInitial.bind(this);
    }

    homePageInitial() {
        const homePage = <Container className="containerStyle">
            <Row className="A100">
                <h3 className="header1">Cocktail WineMart</h3>
            </Row>
            <Row className="A200">
                <Col className="filterSideBar" sm={2}>
                    <p>Filter</p>
                </Col>
                <Col className="componentsStyle" sm={10}>
                    <div className="A2100">
                        {this.state.isShowingOrdDrink ? '' : <ShowOrdinaryDrinks isShowing={this.showingOrdDrink} showHomePage={this.showingHomePage} />}
                    </div>
                    <div className="A2200">
                        {this.state.isShowingCocktail ? '' : <ShowCocktails isShowing={this.showingCocktail} showHomePage={this.showingHomePage}/>}
                    </div>
                    <div className="A2300">
                        {this.state.isShowingShots ? '' : <ShowShots isShowing={this.showingShots} showHomePage={this.showingHomePage} />}
                    </div>
                    <div className="A2400">
                        {this.state.isShowingCoffeeTeas ? '' : <ShowCoffeeTea isShowing={this.showingCoffeeTeas} showHomePage={this.showingHomePage} />}
                    </div>
                    <div className="A2500">
                        {this.state.isShowingBeers ? '' : <ShowBeers isShowing={this.showingBeers} showHomePage={this.showingHomePage} />}
                    </div>
                    <div className="A2600">
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
        this.setState({
            isShowingOrdDrink: false,
            isShowingCocktail: true,
            isShowingShots: true,
            isShowingCoffeeTeas: true,
            isShowingBeers: true,
            isShowingSoftDrinkSoda: true

        });
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

export default Homepage;