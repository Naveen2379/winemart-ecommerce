import React, {isValidElement, useState} from "react";

import '../styles/AlcoholOrNonAlcohol.css';
import '../styles/AlcNonAlcMixed.css'
import {isEmpty} from "lodash";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Drinks from "./Drinks";

export default class AlcoholicDrinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alcDrinks: [],
        };
    }

    componentDidMount() {
        console.log(this.props.keyType);
        const drinkType = this.props.keyType;
        fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?a="+drinkType+"", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "0f95de4865msh72bc273490c401cp149a69jsn898244e5583b"
            }
        }).then(response => response.json())
            .then(result => {console.log(result);
                this.setState({
                    alcDrinks: result.drinks,
                    showSelectedDrink: false
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                {isEmpty(this.state.alcDrinks) ? '' : <Drinks drinks={this.state.alcDrinks} />}
            </div>
        )
    }
}