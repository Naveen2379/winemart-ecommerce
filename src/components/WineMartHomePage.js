import React, {useState} from "react";
import {Avatar, Layout, Tabs} from "antd";
import 'antd/dist/antd.css';

import MixedDrinks from './MixedDrinks';
import AlcoholicDrinks from "./AlcoholicDrinks";
import NonAlcoholicDrinks from "./NonAlcoholicDrinks";
import '../styles/WineMartHomePage.css';
import MixedDrinks_Test from "./MixedDrinks_Test";

const { TabPane } = Tabs;
const { Header, Content } = Layout;


export default class WineMartHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'Alcoholic',
            alcDrinks: [],
            nonAlcDrinks: [],
            drinkType: 'alcohol',
            showAlcDrinks: false,
            showSelectedDrink: true
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(key) {
        this.setState({
            key: key
        });
    }

    render() {
        return <Layout>
            <Header>
                {/*<img src='../images/cocktaildB_logo.png' alt='CocktaildB Image' />*/}
                <b>TheCocktaildB</b>
            </Header>
            <Content className='content-section'>
                <Tabs size='large' onChange={this.handleChange}>
                    <TabPane tab="Alcohol" key="Alcoholic">
                        {this.state.key === "Alcoholic" ? <AlcoholicDrinks keyType={this.state.key} showSelectedDrink={this.state.showSelectedDrink} /> : ''}
                    </TabPane>
                    <TabPane tab="Non Alcohol" key="Non Alcoholic">
                        {this.state.key === 'Non Alcoholic' ? <NonAlcoholicDrinks keyType={this.state.key} /> : ''}
                    </TabPane>
                    <TabPane tab="All Kinds of Drinks" key="Mixed Drinks">
                        {this.state.key === 'Mixed Drinks' ? <MixedDrinks_Test keyType={this.state.key} /> : ''}
                    </TabPane>
                </Tabs>
            </Content>
        </Layout>
    }
}