import React, {useState} from "react";
import { Tabs, Tab } from "react-bootstrap";


import ShowingMixedDrinks from './ShowingMixedDrinks';
import {Row} from "react-grid-system";
import AlcoholicDrinks1 from "./AlcoholicDrinks1";
import NonAlcoholicDrinks from "./NonAlcoholicDrinks";
import './AlcoholOrNonAlcohol.css';
import './AlcNonAlcMixed.css'
import './App.css';


class AlcoholicDrinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowingAlc: false,
            isShowingNonAlc: false,
            isShowingMixedDrinks: false,
            listProducts: [],
            isLoaded: false
        }
    }


    render() {
        return <div>
            <Row className="A100"><h3 className="header1">Cocktail WineMart</h3></Row>
            <Row className="A200">
                <ControlledTabs/>
            </Row>
        </div>
    }


}

function ControlledTabs() {
    const [key, setKey] = useState('home');

    return (
        <Tabs className="myClass" id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
            <Tab tabClassName="eachTabStyle" eventKey="home" title="All Kinds of Drinks">
                <ShowingMixedDrinks />
            </Tab>
            <Tab eventKey="profile" title="Alcohol">
                <AlcoholicDrinks1 />
            </Tab>
            <Tab eventKey="contact" title="Non Alcohol">
                <NonAlcoholicDrinks />
            </Tab>
        </Tabs>
    );
}


export default AlcoholicDrinks;