import React, {isValidElement, useState} from "react";

import '../styles/AlcoholOrNonAlcohol.css';
import '../styles/AlcNonAlcMixed.css'
import {isEmpty} from "lodash";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class AlcoholicDrinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eachAlcDrinkDetails: []
        };
        this.onDrinkClick = this.onDrinkClick.bind(this);
        this.showEachAlcDrinkDetails = this.showEachAlcDrinkDetails.bind(this);
    }

    /*componentDidMount() {
        fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?a=Alcoholic", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "0f95de4865msh72bc273490c401cp149a69jsn898244e5583b"
            }
        }).then(response => {console.log(response); return response.json();})
            .then(result => {console.log(result);
                this.setState({
                    products: result,
                    showSelectedDrink: false
                });
            })
            .catch(err => {
                console.log(err);
            });
    }*/

    onDrinkClick(drinkDetails) {
        console.log(drinkDetails.idDrink);
        const fetchDrinkId = drinkDetails.idDrink;
        const fetchUrl = "https://the-cocktail-db.p.rapidapi.com/lookup.php?i=" + fetchDrinkId + "";
        return fetch(fetchUrl, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "0f95de4865msh72bc273490c401cp149a69jsn898244e5583b"
            }
            })
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then((drinkDtls) => {
                console.log(drinkDtls);
                return this.setState({
                    eachAlcDrinkDetails: drinkDtls
                });
            });
    }

    render() {
        console.log(this.props.products);
        const showAlcoholDrinks = <div>
            {isEmpty(this.props.products) ? '' : this.props.products.drinks.map( (drink) => {
            return (<div className="menu-item" key={drink.strDrink} onClick={() => this.onDrinkClick(drink)}>
                <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
                <h5>{drink.strDrink}</h5>
                <h6>Cost: ₹599/-</h6>
            </div>)
            })
            }</div>;

            return (
            <div className="showDrinksAlcNonAlc">{showAlcoholDrinks}</div>
        )
    }

    showEachAlcDrinkDetails() {
            const showDrink = this.state.eachAlcDrinkDetails.drinks[0];
            const showSelectedDrinkDetails = <div className='selectedDrinkStyle'  style={{width:'1000px'}} >
                <h3 align='left'>{showDrink.strDrink}</h3>
                <Row>
                    <Col sm='2'>
                        <img height="150px" width="150px" src={showDrink.strDrinkThumb} alt="drinkImage"/>
                    </Col>
                    <Col sm='3'>
                        <h4>Ingredients</h4>
                        <h6>{showDrink.strIngredient1}</h6>
                        <h6>{showDrink.strIngredient2}</h6>
                    </Col>
                    <Col sm='3'>
                        <h4>Instructions</h4>
                        <h5>{showDrink.strInstructions}</h5>
                    </Col>
                </Row>
            </div>

            return <div>{showSelectedDrinkDetails}</div>
    }
}