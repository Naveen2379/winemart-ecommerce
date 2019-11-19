import React, {useState} from "react";
import './AlcoholOrNonAlcohol.css';
import './AlcNonAlcMixed.css'
import {isEmpty} from "lodash";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class NonAlcoholicDrinks extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                listProducts: [],
                eachDrinkDetails: []
            };
            this.handleNonAlcClick = this.handleNonAlcClick.bind(this);
            this.showNonAlc = this.showNonAlc.bind(this);
            this.showDrinkDetails = this.showDrinkDetails.bind(this);
            this.showEachNonAlcDrinkDetails = this.showEachNonAlcDrinkDetails.bind(this);

        }

    componentDidMount() {
        fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?a=Non%20Alcoholic", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "0f95de4865msh72bc273490c401cp149a69jsn898244e5583b"
            }
        })
            .then(response => response.json())
            .then(this.showDrinkDetails)
    }

    showDrinkDetails(result) {
        console.log('componentDidMount+ Non Alcohol');
        this.setState({
            listProducts: result
        });
    }

    handleNonAlcClick(selectedDrinkDets) {
        console.log(selectedDrinkDets.idDrink);
        const fetchDrinkId = selectedDrinkDets.idDrink;
        const fetchUrl = "https://the-cocktail-db.p.rapidapi.com/lookup.php?i=" + fetchDrinkId + "";
        return fetch(fetchUrl, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "0f95de4865msh72bc273490c401cp149a69jsn898244e5583b"
            }
        })
        .then(response => response.json())
        .then((drinkDtls) => this.setState({
            eachDrinkDetails: drinkDtls
        }));
}

    render() {
        return <div>
            <div>{isEmpty(this.state.listProducts) ?  '' : this.showNonAlc()}</div>
        </div>
    }


        showNonAlc() {
            const showDrinks = <div className="showDrinksAlcNonAlc"><h4>Non Alcohol Drinks</h4>
                {this.state.listProducts.drinks.map(drink => {
                    return <div className="menu-item" key={drink} onClick={() => this.handleNonAlcClick(drink)}>
                        <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
                        <h5>{drink.strDrink}</h5>
                        <h6>Cost: ₹599/-</h6>
                    </div>
                })}</div>;
            return <div>
                <div>{isEmpty(this.state.eachDrinkDetails) ? showDrinks : ''}</div>
                <div>{isEmpty(this.state.eachDrinkDetails) ? '' : this.showEachNonAlcDrinkDetails()}</div>
            </div>
        }

        showEachNonAlcDrinkDetails() {
            const showDrink = this.state.eachDrinkDetails.drinks[0];
            console.log(this.state.eachDrinkDetails);
            const showSelectedDrinkDetails = <div className='selectedDrinkStyle' style={{width:'1000px'}}>
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

export default NonAlcoholicDrinks;