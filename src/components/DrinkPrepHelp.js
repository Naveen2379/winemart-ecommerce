import React from "react";
import {Row, Col} from "react-bootstrap";

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
                        <h6>{drinkInfo.strIngredient1}</h6>
                        <h6>{drinkInfo.strIngredient2}</h6>
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