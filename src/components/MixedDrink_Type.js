import React from "react";
import ComponentSlider from "@kapost/react-component-slider";
import {isEmpty} from "lodash";
import '../styles/MixedDrinks.css';
import {Button, Figure} from "react-bootstrap";
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

    handleDrinkClick(drinkID) {
        this.props.handleDrinkClick(drinkID);
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
        const mixedDrinksTypeName = mixedDrinksType[0].replace('_', ' ');
            return (
                <React.Fragment>
                    <React.Fragment style={{'fontStyle': 'Italic'}}>
                        {
                            <h4 className="h4Style"><b>{mixedDrinksTypeName}s</b> &nbsp; &nbsp;
                                <Button className='buttonStyle' onClick={() => this.viewAllDrinks(mixedDrinksType[0])}><b>View All</b></Button>
                            </h4>
                        }
                    </React.Fragment>
                    {this.showComponentSlider(mixedDrinksType)}
                    <hr />
                </React.Fragment>
            )
    }

    render() {
        const { mixedDrinksType } = this.props;
        return (
            <React.Fragment>{this.showMixedDrinkType(mixedDrinksType)}</React.Fragment>
        );
    }

}