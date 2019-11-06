import React from "react";

class ShowAllOrdinaryDrinksNew extends React.Component {
    constructor(props) {
        super(props);
       this.allOrdinaryDrinks = this.props.allOrdDrinks;
        /*this.state = {
            isLoaded: false
        }*/
    }

    /*componentDidMount() {
        this.setState({
            isLoaded: true
        })
    }*/

    render () {
        console.log('ShowAllOrdinaryDrinksNew')
        const showDrinks = <div> {this.state.listProducts.drinks.map(drink => {
            return <div className="menu-item" key={drink.strDrinkThumb}>
                <img height="150px" width="150px" src={drink.strDrinkThumb} alt="drinkImage"/>
                <h5>{drink.strDrink}</h5>
            </div>
        })}</div>

        return <div>{showDrinks}</div>
    }
}

//export default ShowAllOrdinaryDrinksNew;