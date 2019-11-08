import React from "react";
import {isEmpty} from "lodash";
import ComponentSlider from "@kapost/react-component-slider";

class ShowCoffeeTea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            listProducts: [],
            showAllCoffeeTeas: false
        }
        const renderLeftArrow = () => <i className="fa fa-caret-left"/>
        const renderRightArrow = () => <i className="fa fa-caret-right"/>

        this.showProd = this.showProd.bind(this);
    }

    componentDidMount() {
        fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?c=Coffee%20%2F%20Tea", {
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
            <div>{this.state.showAllCoffeeTeas ? '' : <h4>Coffee/Tea Available <button key={this.state.listProducts} onClick={this.showAllCoffeeTeas.bind(this, this.state.listProducts)}>View All</button></h4> }</div>
            <div>{this.state.showAllCoffeeTeas ? '' : componentSlider }</div>
            <div>{this.state.showAllCoffeeTeas ?  this.showAlCoffeeTeas() : ''}</div>
        </div>
    }

    showAllCoffeeTeas(allCoffeeTeas) {
        console.log(allCoffeeTeas);
        this.setState({
            showAllCoffeeTeas: true,
            listProducts: allCoffeeTeas
        });

        this.props.isShowing();



    }

    showAlCoffeeTeas() {
        console.log(this.state.listProducts);
        console.log(this.state.show);
        const showDrinks = <div> <h4><button key={this.state.listProducts} onClick={this.goBackToCoffeeTeas.bind(this, this.state.listProducts)}>Back</button> All Available Coffee/Tea</h4>
            {this.state.listProducts.drinks.map(drink => {
                return <div className="menu-item" key={drink.strDrinkThumb}>
                    <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
                    <h5>{drink.strDrink}</h5>
                </div>
            })}</div>

        return <div>{showDrinks}</div>

    }

    goBackToCoffeeTeas(coffeeTeas) {
        this.setState({
            showAllCoffeeTeas: false,
            listProducts: coffeeTeas
        })
    }
}

export default ShowCoffeeTea;