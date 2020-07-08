import React from "react";
import ComponentSlider from "@kapost/react-component-slider";
import {isEmpty} from "lodash";
import '../styles/MixedDrinks.css';
import {Figure} from "react-bootstrap";
import FigureCaption from "react-bootstrap/FigureCaption";
import DrinkPrepHelp from "./DrinkPrepHelp";

export default class MixedDrink_Type extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            drinks: [],
            drinkClicked: false
        };

        const renderLeftArrow = () => <i className="fa fa-caret-left"/>
        const renderRightArrow = () => <i className="fa fa-caret-right"/>
    }

    componentDidMount() {
        const drinkTypeName = this.props.drinkTypeName;
        console.log(drinkTypeName);
        const fetchURL = "https://the-cocktail-db.p.rapidapi.com/filter.php?c="+drinkTypeName+"";
        console.log(fetchURL);
        fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?c="+drinkTypeName+"", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "0f95de4865msh72bc273490c401cp149a69jsn898244e5583b"
            }
        })
            .then(response => response.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    drinks: result.drinks
                });

            })
            .catch(err => {
                console.log(err);
            });
    }

    showAllDrinks(drinks) {
        this.props.showAllDrinks(drinks);
    }
    handleDrinkClick(drinkId) {
        console.log('drink clicked');
        console.log(drinkId);
        /*fetchDrinkDetails(drinkId)
            .then((drinkDetails)=> console.log(drinkDetails));*/
        this.props.handleDrinkClick(drinkId);
    }

    render() {
        const drinksNames = this.props.drinksNames;
        const drinks = this.state.drinks;
        const componentSlider = <ComponentSlider renderLeftArrow={this.renderLeftArrow}
                                                 renderRightArrow={this.renderRightArrow}>
            {drinks.map(drink => {
                return<Figure key={drink.strDrinkThumb} onClick={this.handleDrinkClick.bind(this, drink.idDrink)}>
                    <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
                    <FigureCaption>
                        <b>{drink.strDrink}</b>
                        <h6>Cost: {Math.floor(Math.random()*(1000-500)+500)} ₹</h6>
                    </FigureCaption>
                </Figure>
            })};
        </ComponentSlider>

        const showDrinks = <div className="A3100">{isEmpty(this.state.drinks) ? '' :
            <React.Fragment>
                <div>{<h4 className="h4Style">{this.props.drinkTypeName}s Available <button onClick={this.showAllDrinks.bind(this, drinks)}>View All</button></h4> }</div>
                <div>{componentSlider}</div>
            </React.Fragment>
        }</div>;

        return (
            <div>{isEmpty(this.state.eachDrinkDetails) ? <div>{showDrinks}</div> : <DrinkPrepHelp drinkInfo={drinks} />}</div>
        );
    }

}