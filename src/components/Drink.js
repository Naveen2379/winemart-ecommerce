import React from "react";

export class Drink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const drinkDetails = this.props.drinkDetails;
        return (
            <div>
                <div className="menu-item" key={drinkDetails.strDrink} onClick={() => this.handleDrinkClick(drinkDetails.idDrink)}>
                    <img height="150px" width="150px" src={drinkDetails.strDrinkThumb} alt="drinkImage"/>
                    <h5><b>{drinkDetails.strDrink}</b></h5>
                    <h6>Cost: ₹ {Math.floor(Math.random()*(1000-500)+500)}</h6>
                </div>
            </div>
        );
    }


}