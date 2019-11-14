import React from "react";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import './switch.css'
import AlcoholicDrinks from "./AlcoholicDrinks";
import NavLink from "react-bootstrap/NavLink";


class RouteToAlcohol extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: true
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        console.log('handleChange');
        //<Route path='/AlcoholicDrinks' Component={AlcoholicDrinks} />
    }

    render() {
        return <div><div className="switch-container">
            <h4>Non Alcoholic Drinks</h4>
        <label>
            <input ref="switch" checked={ this.state.isChecked } onChange={ this.handleChange } className="switch" type="checkbox" />
            <div>
                <div></div>
            </div>
        </label>
        <h4>Alcoholic Drinks</h4>
        </div>
            <div>
                <Router>
                    <Link to="/AlcoholicDrinks">CLICK</Link>
                    <div>
                        <Route path='/AlcoholicDrinks' component={ AlcoholicDrinks }></Route>
                    </div>
                </Router>
            </div>
        </div>
    }
}


export default RouteToAlcohol;
