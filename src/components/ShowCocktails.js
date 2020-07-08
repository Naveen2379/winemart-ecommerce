import React from 'react';

import {isEmpty} from "lodash";
import {Col, Row, Table} from 'react-bootstrap';
import ComponentSlider from "@kapost/react-component-slider";

import '../ShowProducts.css'

//Filter By Category - Cocktail
class ShowCocktails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            products: [],
            showAllCocktailDrinks: false
        }
        const renderLeftArrow = () => <i className="fas fa-caret-left"/>
        const renderRightArrow = () => <i className="fas fa-caret-right"/>

        this.showProd = this.showProd.bind(this);
    }
    componentDidMount() {
        fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?c=Cocktail", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "0f95de4865msh72bc273490c401cp149a69jsn898244e5583b"
            }
        })
            .then(response => response.json())
            .then(result => {console.log(result);
                this.setState({
                    isLoaded: true,
                    products: result
                });

            })
            .catch(err => {
                console.log(err);
            });
    }



    render() {
        return <div>{isEmpty(this.state.products) ? "" : this.showProd()}</div>
    }



    showProd() {
        const componentCocktailSlider = <ComponentSlider renderLeftArrow={this.renderLeftArrow}
                                                 renderRightArrow={this.renderRightArrow}>
            {this.state.products.drinks.map(drink => {
                return <div className="menu-item" key={drink.strDrinkThumb}>
                    <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
                    <h5>{drink.strDrink}</h5>
                </div>
            })}
        </ComponentSlider>

        return <div>
            <div>{this.state.showAllCocktailDrinks ? '' : <h4 className="h4Style">Cocktail Drinks Available <button key={this.state.products} onClick={this.showAllCocktailDrinks.bind(this, this.state.products)}>View All</button></h4> }</div>
            <div>{this.state.showAllCocktailDrinks ? '' : componentCocktailSlider }</div>
            <div>{this.state.showAllCocktailDrinks ?  this.showAlCocktailDrinks() : ''}</div>
        </div>
    }

    showAllCocktailDrinks(allCocktatilDrink) {
        this.setState({
            showAllCocktailDrinks: true,
            products: allCocktatilDrink,
            show: true
        });

        this.props.isShowing();

    }

    showAlCocktailDrinks() {
        const showDrinks = <div> <h4 className="h4Style"><button key={this.state.products} onClick={this.goBackToCocktailDrinks.bind(this, this.state.products)}>Back</button> All Available Cocktail Drinks</h4>
            {this.state.products.drinks.map(drink => {
                return <div className="menu-item" key={drink.strDrinkThumb}>
                    <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
                    <h5>{drink.strDrink}</h5>
                </div>
            })}</div>

        return <div>{showDrinks}</div>
    }

    goBackToCocktailDrinks(cocktailDrinks) {
        this.setState({
            showAllCocktailDrinks: false,
            products: cocktailDrinks
        });

        this.props.showHomePage();
    }


}

export default ShowCocktails;