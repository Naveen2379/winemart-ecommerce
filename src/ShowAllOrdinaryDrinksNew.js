import React from "react";

class ShowAllOrdinaryDrinksNew extends React.Component {

    constructor(props) {
        super(props);
       //this.ordinaryDrinks = this.props.ordinaryDrinks;
        this.state = {
            isLoaded: false
        }
    }

    componentDidMount() {
        this.setState({
            isLoaded: true
        })
    }

    render () {
        console.log('ShowAllOrdinaryDrinksNew')
        return <div>{!(this.state.isLoaded) ? this.state.isLoaded : 'Naveen'}</div>
    }
}

export default ShowAllOrdinaryDrinksNew;