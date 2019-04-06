import React, {Component} from 'react';

class EvenAndOdds extends Component{
    constructor(){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }
 
    assignEvenAndOdds(userInput) {
        let arr = userInput.split(',');
        let evenArr = [];
        let oddArr = [];
       
       

            for(let i = 0; i < arr.length; i++){
        
                if(arr[i] % 2 === 0) {
                    evenArr.push( parseInt(arr[i],10));
                }else if(arr[i]){
                    oddArr.push( parseInt(arr[i], 10));
                }
            }
            this.setState({ evenArray: evenArr, oddArray: oddArr });
        
    }

    render() {
        return(
            <div className="puzzleBox evenAndOddPB">
            <h4>Evans and Odds</h4>
                <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
                <span className="resultBox">Evans:{JSON.stringify(this.state.evenArray)}</span>
                <span className="resultBox">Odds:{JSON.stringify(this.state.oddArray)}</span>
            </div>
            
        )
    }
}

export default EvenAndOdds;