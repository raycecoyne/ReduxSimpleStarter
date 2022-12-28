import React, { Component } from 'react';


//const SearchBar = () => {
//    return <input />;
//};

class SearchBar extends Component {
    constructor(props){
        super(props); //calls parent constructor
        this.state = {term:''};
    }

    render() {
        return (
            <div>
            <input
                value = {this.state.term} 
                onChange= {event => this.setState({term: event.target.value})} />
            </div>
        );
    }

    /*replaced below w/ arrow function
    
    render() {
        return <input onChange={this.onInputChange} />;
    }
    onInputChange(event) {
        console.log(event.target.value);
    }
    */
}

export default SearchBar;