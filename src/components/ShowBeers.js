import React from "react";
import {isEmpty} from "lodash";
import ComponentSlider from "@kapost/react-component-slider";

class ShowBeers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            products: [],
            showAllBeers: false
        }
        const renderLeftArrow = () => <i className="fa fa-caret-left"/>
        const renderRightArrow = () => <i className="fa fa-caret-right"/>

        this.showProd = this.showProd.bind(this);
    }

    componentDidMount() {
        fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?c=Beer", {
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
        return <div>{isEmpty(this.state.products) ? "" : this.showProd()}</div>;
    }



    showProd() {
        const componentSlider = <ComponentSlider renderLeftArrow={this.renderLeftArrow}
                                                 renderRightArrow={this.renderRightArrow}>
            {this.state.products.drinks.map(drink => {
                return <div className="menu-item" key={drink.strDrinkThumb}>
                    <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
                    <h5>{drink.strDrink}</h5>
                </div>
            })}
        </ComponentSlider>


        return  <div>
            <div>{this.state.showAllBeers ? '' : <h4 className="h4Style">Beers Available <button key={this.state.products} onClick={this.showAllBeers.bind(this, this.state.products)}>View All</button></h4> }</div>
            <div>{this.state.showAllBeers ? '' : componentSlider }</div>
            <div>{this.state.showAllBeers ?  this.showAlBeers() : ''}</div>
        </div>
    }

    showAllBeers(allBeers) {
        this.setState({
            showAllBeers: true,
            products: allBeers,
            show: true
        });

        this.props.isShowing();
    }

    showAlBeers() {
        const showDrinks = <div> <h4 className="h4Style"><button key={this.state.products} onClick={this.goBackToBeers.bind(this, this.state.products)}>Back</button> All Available Beers</h4>
            {this.state.products.drinks.map(drink => {
                return <div className="menu-item" key={drink.strDrinkThumb}>
                    <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
                    <h5>{drink.strDrink}</h5>
                </div>
            })}</div>

        return <div>{showDrinks}</div>

    }

    goBackToBeers(beers) {
        this.setState({
            showAllBeers: false,
            products: beers
        });
        this.props.showHomePage();
    }
}

export default ShowBeers;