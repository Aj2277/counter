import React, { Component } from 'react';
import '../../App.css';

export class Counter extends Component {
  state = {
    num: 0
  }

  increment = (e) => {
    e.preventDefault();
    this.setState({ num: this.state.num +1 })
  }

  decrement = (e) => {
    e.preventDefault();
    this.setState({ num: this.state.num -1 })
  }

  render() {
    
    return (
      <div>
        <h1>Counter</h1>
          <div className="counterBox">
            <p className="digits">{this.state.num}</p>
          </div>

          <div className="buttons">
           <button onClick={this.increment}>+</button>
           <button onClick={this.decrement}>-</button>
          </div>


      </div>
    )
  }
}

export default Counter
