import React, { Component } from 'react';
import './App.css';

class ProductComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      qty:0,
    };
    this.buy = this.buy.bind(this);
  }
  buy(){
    this.setState({qty : this.state.qty + 1}, function(){
      this.props.parentCalculatePrice(this.props.price);
    });
  }
  info = () =>{
    this.props.parentDisplayInfo(this.state.qty, this.props.name,this.props.price);
  }
  render() {
    return (
      <div className="App">
        <p>{this.props.name} - ${this.props.price}</p>
        <button onClick={this.buy}>Buy</button>
        <button onClick={this.info}>Show</button>
        <h3>Bought: {this.state.qty} item(s)</h3>
        <hr/>
      </div>
    );
  }
}
export default ProductComponent;
