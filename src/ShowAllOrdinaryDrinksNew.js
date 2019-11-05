import React from "react";

class ShowAllOrdinaryDrinksNew extends React.Component {

    constructor(props) {
        super(props);
       this.ordinaryDrinks = this.props.ordinaryDrinks;

    }

    render () {
        console.log('ShowAllOrdinaryDrinksNew')
        return <div>{this.ordinaryDrinks}</div>
    }
}

//export default ShowAllOrdinaryDrinksNew;