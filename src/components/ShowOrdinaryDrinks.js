import React from 'react';

import {isEmpty} from "lodash";
import {Col, Row, Table} from 'react-bootstrap';
import ComponentSlider from "@kapost/react-component-slider";

import '../ShowProducts.css'
//import ShowCocktails from "./ShowCocktails";

//Filter By Category - Ordinary_Drink
class ShowOrdinaryDrinks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            listProducts: [],
            showAllOrdDrinks: false,
            isShowingOrdDrink: this.props.isShowing,
            isShowingCocktail: this.props.isShowing
        };
        const renderLeftArrow = () => <i className="fa fa-caret-left"/>
        const renderRightArrow = () => <i className="fa fa-caret-right"/>

        this.showProd = this.showProd.bind(this);
    }

    componentDidMount() {
        fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?c=Ordinary_Drink", {
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
                listProducts: result
                });

            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return <div>{isEmpty(this.state.listProducts) ? "" : this.showProd()}</div>;
    }



    showProd() {
        const componentSlider = <ComponentSlider renderLeftArrow={this.renderLeftArrow}
                                                 renderRightArrow={this.renderRightArrow}>
            {this.state.listProducts.drinks.map(drink => {
                return <div className="menu-item" key={drink.strDrinkThumb}>
                    <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
                    <h5>{drink.strDrink}</h5>
                    <h6>Cost: ₹599/-</h6>
                </div>
            })}
        </ComponentSlider>


        return  <div>
                <div>{this.state.showAllOrdDrinks ? '' : <h4 className="h4Style">Ordinary Drinks Available <button key={this.state.listProducts} onClick={this.showAllOrdinaryDrinks.bind(this, this.state.listProducts)}>View All</button></h4> }</div>
                <div>{this.state.showAllOrdDrinks ? '' : componentSlider }</div>
                <div>{this.state.showAllOrdDrinks ?  this.showAlOrdDrinks() : ''}</div>
        </div>
    }

    showAllOrdinaryDrinks(allOrdDrink) {
        this.setState({
            showAllOrdDrinks: true,
            listProducts: allOrdDrink
        });
        this.props.isShowing();
    }

    showAlOrdDrinks() {
        const showDrinks = <div> <h4  className="h4Style"><button key={this.state.listProducts} onClick={this.goBackToOrdDrinks.bind(this, this.state.listProducts)}>Back</button> All Available Ordinary Drinks</h4>
            {this.state.listProducts.drinks.map(drink => {
            return <div className="menu-item" key={drink.strDrinkThumb}>
                <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
                <h5>{drink.strDrink}</h5>
                <h6>Cost: ₹599/-</h6>
            </div>
        })}</div>

        return <div>{showDrinks}</div>
    }

    goBackToOrdDrinks(ordDrinks) {
        this.setState({
            showAllOrdDrinks: false,
            listProducts: ordDrinks
        });
        this.props.showHomePage();
    }


}


export default ShowOrdinaryDrinks;