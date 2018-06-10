import React, { Component } from 'react';
import Count from './components/Count';
import ControlBoard from './components/ControlBoard'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)
  }

  onIncrement() {
    let newCount = this.state.count + 1
    this.setState({count: newCount})
  }

  onDecrement() {
    let newCount = this.state.count - 1
    this.setState({count: newCount})
  }

  render() {
    return (
      <div className="app">
        <Count>{this.state.count}</Count>
        <ControlBoard
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
        />
      </div>
    );
  }
}

export default App;
