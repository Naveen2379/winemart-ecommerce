import React from "react";
import {Row, Col} from "react-bootstrap";
import '../styles/DrinkPrepHelp.css';

export default class DrinkPrepHelp extends React.Component {
    render() {
        const drinkInfo = this.props.drinkInfo;
        console.log(drinkInfo);
        return (
            <div className='selectedDrinkStyle' >
                <h3 align='left'>{drinkInfo.strDrink}</h3>
                <Row>
                    <Col sm='2'>
                        <img height="150px" width="150px" src={drinkInfo.strDrinkThumb} alt="drinkImage"/>
                    </Col>
                    <Col sm='3'>
                        <h4>Ingredients</h4>
                        <h5>{drinkInfo.strIngredient1}</h5>
                        <h5>{drinkInfo.strIngredient2}</h5>
                    </Col>
                    <Col sm='3'>
                        <h4>Instructions</h4>
                        <h5>{drinkInfo.strInstructions}</h5>
                    </Col>
                </Row>
            </div>
        );
    }

}