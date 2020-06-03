import React, {useState} from "react";
import { Tabs } from "antd";
import 'antd/dist/antd.css';

import MixedDrinks from './MixedDrinks';
import {Row} from "react-grid-system";
import AlcoholicDrinks from "./AlcoholicDrinks";
import NonAlcoholicDrinks from "./NonAlcoholicDrinks";
import '../styles/AlcoholOrNonAlcohol.css';
import '../styles/AlcNonAlcMixed.css'
import '../App.css';
import '../styles/MixedDrinks.css';
import '../styles/HomePage.css';
const { TabPane } = Tabs;


export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'Alcohol',
            alcDrinks: [],
            nonAlcDrinks: [],
            drinkType: 'alcohol',
            showAlcDrinks: false,
            showSelectedDrink: true
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?a=Alcoholic", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "0f95de4865msh72bc273490c401cp149a69jsn898244e5583b"
            }
        }).then(response => {console.log(response); return response.json();})
            .then(result => {console.log(result);
                this.setState({
                    alcDrinks: result,
                    drinkType: 'alcohol',
                    showSelectedDrink: false
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleChange(key) {
        const fetchURLKey = key;
        if(fetchURLKey === 'alcohol') {
            console.log('key', key);
            fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?a=Alcoholic", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                    "x-rapidapi-key": "0f95de4865msh72bc273490c401cp149a69jsn898244e5583b"
                }
            }).then(response => {console.log(response); return response.json();})
                .then(result => {console.log(result);
                    this.setState({
                        showAlcDrinks: true,
                        alcDrinks: result,
                        showSelectedDrink: false
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        }
        else if(fetchURLKey === 'nonAlcohol') {
            console.log('key', key);
            fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?a=Non%20Alcoholic", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                    "x-rapidapi-key": "0f95de4865msh72bc273490c401cp149a69jsn898244e5583b"
                }
            }).then(response => response.json())
                .then(result => {console.log(result);
                    this.setState({
                        nonAlcDrinks: result
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        }
        else {

        }
        this.setState({
            key: key
        }, (() => console.log(key)));

    }

    render() {
        return <div>
            <Row><h3 className="header1">Cocktail WineMart</h3></Row>
            <Row>
                <Tabs defaultActiveKey="alcohol" size='large' onChange={this.handleChange}>
                    <TabPane tab="Alcohol" key="alcohol">
                        <AlcoholicDrinks products={this.state.alcDrinks} showSelectedDrink={this.state.showSelectedDrink}/>
                    </TabPane>
                    <TabPane tab="Non Alcohol" key="nonAlcohol">
                        <NonAlcoholicDrinks products={this.state.nonAlcDrinks}/>
                    </TabPane>
                    <TabPane tab="All Kinds of Drinks" key="mixedDrinks">
                        <MixedDrinks />
                    </TabPane>
                </Tabs>
            </Row>
        </div>
    }
}