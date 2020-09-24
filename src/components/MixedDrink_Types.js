import React, {Component} from 'react';
import MixedDrink_Type from "./MixedDrink_Type";
import Drinks from "./Drinks";
import {isEmpty} from "lodash";

class MixedDrinkTypes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mixedDrinksTypes: [],
            mixedDrinksTypeName: '',
            drinksFromViewAll: []
        }
    }

    componentDidMount() {
        const {mixedDrinkTypes} = this.props;
        const fetchMixedTypeDrinksURLs = mixedDrinkTypes.map( (mixedDrinkTypeName) =>
            fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?c="+mixedDrinkTypeName+"", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "0f95de4865msh72bc273490c401cp149a69jsn898244e5583b"
            }
        }));

        Promise.all(fetchMixedTypeDrinksURLs)
            .then(responses => {
                console.log(responses);
                return Promise.all(responses.map((response) => response.json()))
            })
            .then(results => {
                console.log(results);
                console.log(mixedDrinkTypes);
                const drinksWithMixedTypeName = mixedDrinkTypes.map( (drinkTypeName, ind) => {
                    const newArr = [];
                    newArr.push(drinkTypeName, results[ind].drinks);
                    return newArr;
                })
                return this.setState( {
                    mixedDrinksTypes: drinksWithMixedTypeName
                })
            })
    }

    handleDrinkClick = (drinkId) => {
        console.log('handle drink click');
        const fetchUrl = "https://the-cocktail-db.p.rapidapi.com/lookup.php?i=" + drinkId + "";
        return fetch(fetchUrl, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "0f95de4865msh72bc273490c401cp149a69jsn898244e5583b"
            }
        })
            .then(response => {
                return response.json();
            })
            .then((drinkDtls) => {
                this.setState({
                    eachDrinkDetails: drinkDtls.drinks[0]
                }, () => this.state.eachDrinkDetails);
            });
    }

   /* showMixedDrinks = (mixedDrinkTypes) => {
        return (
            mixedDrinkTypes.map( (mixedDrinkType) => {
                return (
                    <div key={mixedDrinkType} className="A300">
                        <MixedDrink_Type mixedDrinkTypeName={mixedDrinkType} showAllDrinks={this.showAllDrinks} handleDrinkClick={this.handleDrinkClick} />
                    </div>
                );
            })
        )
    }*/

    viewAllDrinks = (mixedDrinksTypeName) => {
        //console.log(this.state.mixedDrinksTypes);
        console.log(mixedDrinksTypeName);
        const { mixedDrinksTypes } = this.state;
        const extractedmixedDrinksType = mixedDrinksTypes.map( (mixedDrinksType) => { if(mixedDrinksType[0]===mixedDrinksTypeName) {return mixedDrinksType[1]} } )
            .filter(each =>each!==undefined).flat();
        console.log(extractedmixedDrinksType);
        //const extractedmixedDrinksType = draftmixedDrinksType.filter(each => each!==undefined).flat();
        this.setState({
            mixedDrinksTypeName: mixedDrinksTypeName,
            drinksFromViewAll: extractedmixedDrinksType
        });
    }


    showMixedDrinks = (mixedDrinksTypes) => {
        //console.log(mixedDrinksTypes);
        return (
            mixedDrinksTypes.map( (mixedDrinksType) => {
                console.log(mixedDrinksType);
                    return (
                        <div key={mixedDrinksType} className="A300">
                            <MixedDrink_Type mixedDrinksType={mixedDrinksType} viewAllDrinks={this.viewAllDrinks} handleDrinkClick={this.handleDrinkClick} />
                        </div>
                    );
                })
            )
    }

    render() {
        const { mixedDrinksTypes, drinksFromViewAll, mixedDrinksTypeName } = this.state;
        const hasDrinks = !isEmpty(drinksFromViewAll);
        return (
            <div>
                { hasDrinks ? <Drinks drinks={drinksFromViewAll} /> : this.showMixedDrinks(mixedDrinksTypes)}
            </div>
        );
    }
}

export default MixedDrinkTypes;