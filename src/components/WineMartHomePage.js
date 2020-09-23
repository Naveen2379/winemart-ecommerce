import React, {useState} from "react";
import { Layout, Tabs} from "antd";
import 'antd/dist/antd.css';

import MixedDrinks from "./MixedDrinks";
import {fetchDrinks} from "./FetchDrinks";
import Drinks from "./Drinks";
import '../styles/WineMartHomePage.css';

const { TabPane } = Tabs;
const { Header, Content } = Layout;


export default class WineMartHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'Alcoholic',
        };
    }

    handleChange = (key) => {
        this.setState({
            key: key
        });
    }

    render() {
        const {key} = this.state;
        const FetchDrinksComp = fetchDrinks(Drinks);
        return <Layout>
            <Header>
                {/*<img src='../images/cocktaildB_logo.png' alt='CocktaildB Image' />*/}
                <b>TheCocktaildB</b>
            </Header>
            <Content className='content-section'>
                <Tabs size='large' onChange={this.handleChange}>
                    <TabPane tab="Alcohol" key="Alcoholic">
                        <div>{key === "Alcoholic" ? <FetchDrinksComp drinksType={key} /> : ''}</div>
                    </TabPane>
                    <TabPane tab="Non Alcohol" key="Non Alcoholic">
                        <div>{key === 'Non Alcoholic' ? <FetchDrinksComp drinksType={key} />  : ''}</div>
                    </TabPane>
                    <TabPane tab="All Kinds of Drinks" key="Mixed Drinks">
                        {key === 'Mixed Drinks' ? <MixedDrinks keyType={key} /> : ''}
                    </TabPane>
                </Tabs>
            </Content>
        </Layout>
    }
}