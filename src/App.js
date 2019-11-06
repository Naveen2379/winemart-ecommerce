import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShowOrdinaryDrinks from "./ShowOrdinaryDrinks";
import ShowCocktails from "./ShowCocktails";
import ShowShots from "./ShowShots";
import ShowCoffeeTea from "./ShowCoffeeTea";
import ShowBeers from "./ShowBeers";
import ShowSoftDrinkSoda from "./ShowSoftDrinkSoda";

function App() {
  return (
    <div className="App">
      <div className="A100">
        <h3 className="header1">Cocktail WineMart</h3>
      </div>
      <div className="A200">
        <ShowOrdinaryDrinks />
      </div>
    <div className="A300">
        <ShowCocktails />
    </div>
    <div className="A400">
        <ShowShots />
    </div>
    <div className="A500">
        <ShowCoffeeTea />
    </div>
    <div>
        <ShowBeers />
    </div>
    <div>
        <ShowSoftDrinkSoda />
    </div>

</div>
);
}

export default App;
