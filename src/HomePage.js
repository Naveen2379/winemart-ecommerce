import React, {useState} from "react";
import { Tabs, Tab } from "react-bootstrap";


import ShowingMixedDrinks from './ShowingMixedDrinks';
import {Row} from "react-grid-system";
import AlcoholicDrinks from "./AlcoholicDrinks";
import NonAlcoholicDrinks from "./NonAlcoholicDrinks";
import './AlcoholOrNonAlcohol.css';
import './AlcNonAlcMixed.css'
import './App.css';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowingAlc: false,
            isShowingNonAlc: false,
            isShowingMixedDrinks: false,
            listProducts: [],
            isLoaded: false
        };
    }


    render() {
        return <div>
            <Row className="A100"><h3 className="header1">Cocktail WineMart</h3></Row>
            <Row className="A200">
                <ControlledTabs />
            </Row>
        </div>
    }
}

function ControlledTabs() {
    const [key, setKey] = useState('Alcohol');

    return (
        <Tabs className="myClass" id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
            <Tab eventKey="Alcohol" title="Alcohol">
                <AlcoholicDrinks />
            </Tab>
            <Tab eventKey="Non Alcohol" title="Non Alcohol">
                <NonAlcoholicDrinks onClick={() => setKey}/>
            </Tab>
            <Tab tabClassName="eachTabStyle" eventKey="All Kinds of Drinks" title="All Kinds of Drinks">
                <ShowingMixedDrinks onClick={() => setKey}/>
            </Tab>
        </Tabs>
    );
}

function handleAlcClick(){
    console.log('naveen');
}



export default HomePage;