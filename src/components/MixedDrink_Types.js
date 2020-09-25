import React, {Component} from 'react';
import MixedDrink_Type from "./MixedDrink_Type";
import Drinks from "./Drinks";
import {isEmpty} from "lodash";
import DrinkPrepHelp from "./DrinkPrepHelp";

class MixedDrinkTypes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mixedDrinksTypes: [],
            mixedDrinksTypeName: '',
            drinksForViewAll: [],
            eachDrinkDetails: []
        }
    }

    componentDidMount() {
        this.fetchDataFromMixedDrinksTypes();
    }

    fetchDataFromMixedDrinksTypes = () => {
        const { mixedDrinkTypesNames } = this.props;
        const fetchMixedTypeDrinksURLs = mixedDrinkTypesNames.map( (mixedDrinkTypeName) =>
            fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?c="+mixedDrinkTypeName+"", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                    "x-rapidapi-key": "0f95de4865msh72bc273490c401cp149a69jsn898244e5583b"
                }
            }));

        Promise.all(fetchMixedTypeDrinksURLs)
            .then(responses => {
                return Promise.all(responses.map((response) => response.json()))
            })
            .then(results => {
                const drinksWithMixedTypeName = mixedDrinkTypesNames.map( (drinkTypeName, ind) => {
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
                    eachDrinkDetails: drinkDtls.drinks[0],
                    drinksForViewAll: []
                });
            });
    }

    viewAllDrinks = (mixedDrinksTypeName) => {
        const { mixedDrinksTypes } = this.state;
        const extractedMixedDrinksType = mixedDrinksTypes.map( (mixedDrinksType) => { if(mixedDrinksType[0]===mixedDrinksTypeName) {return mixedDrinksType[1]} } )
            .filter(each =>each!==undefined).flat();
        this.setState({
            mixedDrinksTypeName: mixedDrinksTypeName,
            drinksForViewAll: extractedMixedDrinksType,
        });
    }


    showMixedDrinks = (mixedDrinksTypes) => {
        return (
            mixedDrinksTypes.map( (mixedDrinksType) => {
                    return (
                        <React.Fragment key={mixedDrinksType} className="A300">
                            <MixedDrink_Type mixedDrinksType={mixedDrinksType} viewAllDrinks={this.viewAllDrinks} handleDrinkClick={this.handleDrinkClick} />
                        </React.Fragment>
                    );
                })
            )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(!isEmpty(prevState.eachDrinkDetails) || !isEmpty(prevState.drinksForViewAll)) {
            this.setState({
                eachDrinkDetails: [],
                drinksForViewAll: []
            });
        }
    }

    render() {
        const { mixedDrinksTypes, drinksForViewAll, mixedDrinksTypeName, eachDrinkDetails } = this.state;
        const hasDrinksForViewAll = !isEmpty(drinksForViewAll);
        const hasEachDrinkDetails = !isEmpty(eachDrinkDetails);
        return (
            <React.Fragment>
                {
                    hasDrinksForViewAll ? <div className='part-mixed-drinks'>
                        <h2>{mixedDrinksTypeName.replace('_', ' ')}s</h2>
                        <Drinks drinks={drinksForViewAll} />
                    </div>
                    : hasEachDrinkDetails ? <DrinkPrepHelp drinkInfo={eachDrinkDetails} /> : this.showMixedDrinks(mixedDrinksTypes)
                }
            </React.Fragment>
        );
    }
}

export default MixedDrinkTypes;