import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  render() {
    return(
      <div>
        <p>Times Clicked: {this.props.value}</p>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    )
  }
}

Counter.PropTypes = {
  value: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func
}

export default Counter;
