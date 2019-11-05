import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShowOrdinaryDrinks from "./ShowOrdinaryDrinks";
import ShowCocktailDrinks from "./ShowCocktailDrinks";

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
        <ShowCocktailDrinks />
    </div>
</div>
);
}

export default App;
