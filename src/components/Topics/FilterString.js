import React, {Component} from 'react';

class FilterString extends Component{
    constructor(){
        super();
        this.state = {
            unFilteredArray: ['John','Fred','Mark','Bill','Luck'],
            userInput: '',
            filteredArray: []

        }
    }
    handlerChange = (val) => {
        this.setState({userInput: val})
    }

    arrayNames = (userInput) => {
        let unFilteredArray = this.state.unFilteredArray;
        let filteredArray = [];

        for(let i = 0; i < unFilteredArray.length; i++) {
            if(unFilteredArray[i].includes(userInput)){
                filteredArray.push(unFilteredArray[i]);
            }
        }
         this.setState({filteredArray: filteredArray})
    }
    render() {
        return (
            <div className="puzzleBox filterStringPB">
            <h4> Filter String </h4>
            <span className="puzzleText"> Names: { JSON.stringify(this.state.unFilteredArray) } </span>
            <input className="inputLine" onChange={ (e) => this.handlerChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.arrayNames(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredArray) } </span>
          </div>
        )
    }
}

export default FilterString