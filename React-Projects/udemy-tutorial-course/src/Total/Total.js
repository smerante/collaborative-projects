import React, { Component } from 'react';
import './Total.css'
class Total extends Component {
   
    render() {
      return (
        <div className="Total">
        <h4>Total Cost: ${this.props.totalPrice} </h4>
        <hr/>
        </div>
      );
    }
  }
  export default Total;
  