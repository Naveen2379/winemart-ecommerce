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
            eachMixedTypeDrinks: [],
        };
        const renderLeftArrow = () => <i className="fa fa-caret-left"/>
        const renderRightArrow = () => <i className="fa fa-caret-right"/>
    }


    viewAllDrinks(mixedDrinksTypeName) {
        this.props.viewAllDrinks(mixedDrinksTypeName);
    }

    handleDrinkClick(drinkId) {
        console.log('drink clicked');
        console.log(drinkId);
        this.props.handleDrinkClick(drinkId);
    }

    showComponentSlider = (mixedDrinksType) => {
        return <ComponentSlider renderLeftArrow={this.renderLeftArrow}
                                renderRightArrow={this.renderRightArrow}>
            {mixedDrinksType[1].map(drink => {
                return <Figure key={drink.strDrinkThumb} onClick={ () => this.handleDrinkClick(drink.idDrink)}>
                    <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
                    <FigureCaption>
                        <b>{drink.strDrink}</b>
                        <h6>Cost: {Math.floor(Math.random()*(1000-500)+500)} ₹</h6>
                    </FigureCaption>
                </Figure>
            })};
        </ComponentSlider>
    }

    showMixedDrinkType = (mixedDrinksType) => {
        console.log(mixedDrinksType);
            return (
                <React.Fragment>
                    <div>
                        {
                            <h4 className="h4Style">{mixedDrinksType[0]}s Available
                                <button className='buttonStyle' onClick={() => this.viewAllDrinks(mixedDrinksType[0])}>View All</button>
                            </h4>
                        }
                    </div>
                    <div>{this.showComponentSlider(mixedDrinksType)}</div>
                </React.Fragment>
            )
    }

    render() {
        const { mixedDrinksType  } = this.props;
        return (
            <div>
                {
                    <div>{this.showMixedDrinkType(mixedDrinksType)}</div> /*: <DrinkPrepHelp drinkInfo={drinks} />*/
                }
            </div>
        );
    }

}