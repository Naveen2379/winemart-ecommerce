import React from "react";
import {isEmpty} from "lodash";
import ComponentSlider from "@kapost/react-component-slider";

class ShowSoftDrinkSoda extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            listProducts: [],
            showAllSoftDrinkSodas: false
        }
        const renderLeftArrow = () => <i className="fa fa-caret-left"/>
        const renderRightArrow = () => <i className="fa fa-caret-right"/>

        this.showProd = this.showProd.bind(this);
    }

    componentDidMount() {
        fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?c=Soft%20Drink%20%2F%20Soda", {
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
        return <div>{isEmpty(this.state.listProducts) ? "" : this.showProd()}</div>
    }



    showProd() {
        const componentSlider = <ComponentSlider renderLeftArrow={this.renderLeftArrow}
                                                 renderRightArrow={this.renderRightArrow}>
            {this.state.listProducts.drinks.map(drink => {
                return <div className="menu-item" key={drink.strDrinkThumb}>
                    <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
                    <h5>{drink.strDrink}</h5>
                </div>
            })}
        </ComponentSlider>


        return  <div>
            <div>{this.state.showAllSoftDrinkSodas ? '' : <h4>Soft Drink Sodas Available <button key={this.state.listProducts} onClick={this.showAllSoftDrinkSodas.bind(this, this.state.listProducts)}>View All</button></h4> }</div>
            <div>{this.state.showAllSoftDrinkSodas ? '' : componentSlider }</div>
            <div>{this.state.showAllSoftDrinkSodas ?  this.showAlSoftdrinkSodas() : ''}</div>
        </div>
    }

    showAllSoftDrinkSodas(allsoftdrinkSodas) {
        console.log(allsoftdrinkSodas);
        this.setState({
            showAllSoftDrinkSodas: true,
            listProducts: allsoftdrinkSodas,
            show: true
        });

        this.props.isShowing();

    }

    showAlSoftdrinkSodas() {
        console.log(this.state.listProducts);
        console.log(this.state.show);
        const showDrinks = <div> <h4><button key={this.state.listProducts} onClick={this.goBackToSoftDrinkSodas.bind(this, this.state.listProducts)}>Back</button> All Available Soft Drink Sodas</h4>
            {this.state.listProducts.drinks.map(drink => {
                return <div className="menu-item" key={drink.strDrinkThumb}>
                    <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
                    <h5>{drink.strDrink}</h5>
                </div>
            })}</div>

        return <div>{showDrinks}</div>

    }

    goBackToSoftDrinkSodas(softdrinkSodas) {
        this.setState({
            showAllSoftDrinkSodas: false,
            listProducts: softdrinkSodas
        })
    }
}

export default ShowSoftDrinkSoda;