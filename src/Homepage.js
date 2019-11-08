import React from "react";
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
            showHomepage: true,
            isShowingOrdDrink: false,
            isShowingCocktail: false,
            isShowingShots: false,
            isShowingCoffeeTeas: false,
            isShowingBeers: false,
            isShowingSoftDrinkSoda: false,
            isViewAll: true
        };
        this.showingOrdDrink = this.showingOrdDrink.bind(this);
        this.showingCocktail = this.showingCocktail.bind(this);
        this.showingShots = this.showingShots.bind(this);
        this.showingCoffeeTeas = this.showingCoffeeTeas.bind(this);
        this.showingBeers = this.showingBeers.bind(this);
        this.showingSoftDrinkSoda = this.showingSoftDrinkSoda.bind(this);

    }

    render() {

        return <div>
            <div className="A100">
                <h3 className="header1">Cocktail WineMart</h3>
            </div>
            <div className="A200">
                {this.state.isShowingOrdDrink ? '' : <ShowOrdinaryDrinks isShowing={this.showingOrdDrink} isViewAll={false}  />}
            </div>
            <div className="A300">
                {this.state.isShowingCocktail ? '' : <ShowCocktails isShowing={this.showingCocktail}/>}
            </div>
            <div className="A400">
                {this.state.isShowingShots ? '' : <ShowShots isShowing={this.showingShots}/>}
            </div>
            <div className="A500">
                {this.state.isShowingCoffeeTeas ? '' : <ShowCoffeeTea isShowing={this.showingCoffeeTeas}/>}
            </div>
            <div className="A600">
                {this.state.isShowingBeers ? '' : <ShowBeers isShowing={this.showingBeers}/>}
            </div>
            <div className="A700">
                {this.state.isShowingSoftDrinkSoda ? '' : <ShowSoftDrinkSoda isShowing={this.showingSoftDrinkSoda}/>}
            </div>
        </div>
    }

    showingOrdDrink() {
        console.log('showingOrdDrink');
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
        console.log('showingCocktail');
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
        console.log('showingShots');
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
        console.log('showingCoffeeTeas');
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
        console.log('showingBeers');
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
        console.log('showingSoftDrinkSoda');
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