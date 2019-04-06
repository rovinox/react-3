import React, {Component} from 'react';

class FilterObject extends Component{
    constructor(){
        super();
        this.state ={
            unFilteredArray: [{
                dogName: 'Slander',
                age: 3,
                breed: 'Bulldog',
            },
            {
                dogName: 'Mont',
                age: 4,
                breed: 'Poodle',
            },
            {
                dogName: 'Bord',
                age: 6,
                breed: 'Beagle',
                eyesColor: 'blue',
            },

            {
                dogName: 'Chunk',
                breed: 'Pug',
            }


        ],
            userInput: '',
            filteredArray: []
        }
    }
    handlerChange = (val) => {
        this.setState({userInput: val});
    }

    handlerFilter = (prop) => {
        let unFilteredArray = this.state.unFilteredArray;
        let filteredArray = [];

        for(let i = 0; i < unFilteredArray.length; i++) {
            if(unFilteredArray[i].hasOwnProperty(prop)) {
                filteredArray.push(unFilteredArray[i]);
            }
        }
        this.setState({filteredArray: filteredArray});
    }

    render(){
        return (
            <div className="puzzleBox filterObjectPB">
            <h4> Filter Object </h4>
            <span className="puzzleText"> Original: { JSON.stringify(this.state.unFilteredArray)} </span>
            <input className="inputLine" onChange={ (event) => this.handlerChange(event.target.value) } ></input>
            <button className="confirmationButton" onClick={ () => this.handlerFilter(this.state.userInput)}> Filter </button>
            <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray) } </span>
          </div>
        )
    }
}

export default FilterObject;