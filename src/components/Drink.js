import React from "react";
import FigureCaption from "react-bootstrap/FigureCaption";
import {Figure} from "react-bootstrap";

export class Drink extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDrinkClick(drinkId) {
        this.props.handleDrinkClick(drinkId);
    }

    render() {
        const drinkDetails = this.props.drinkDetails;
        return (
            <Figure key={drinkDetails.strDrink} onClick={this.handleDrinkClick.bind(this, drinkDetails.idDrink)} >
                <img height="150px" width="150px" src={drinkDetails.strDrinkThumb} alt="drinkImage"/>
                <FigureCaption>
                    <b>{drinkDetails.strDrink}</b>
                    <h6>Cost: {Math.floor(Math.random()*(1000-500)+500)} ₹</h6>
                </FigureCaption>
            </Figure>
        );
    }


}