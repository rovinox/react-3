import React, {Component} from 'react'

class Sum extends Component{
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    handlerChange = (val) => {
        this.setState({number1: parseInt(val)})
    }
    handlerChangeTwo = (val) => {
        this.setState({number2: parseInt(val)})
    }

    addNumbers = (num1,num2) => {
        this.setState({sum: num1 + num2});
    }
    render() {
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(event) => this.handlerChange(event.target.value)}></input>
                <input className="inputLine" onChange={(event) => this.handlerChangeTwo(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.addNumbers(this.state.number1, this.state.number2)}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}
export default Sum;