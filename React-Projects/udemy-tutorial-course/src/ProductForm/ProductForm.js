import React, { Component } from 'react';

import './ProductForm.css';

class ProductForm extends Component {    
  constructor(props){
    super(props);
    this.submit=this.submit.bind(this);
  }
    submit(e){
        e.preventDefault()
        var product = {
            name:this.refs.name.value,
            price: parseInt(this.refs.price.value,10)
        }
        this.props.handleCreateProduct(product);
        this.refs.name.value="";
        this.refs.price.value="";
    }
    render() {
      return (
        <div className="ProductForm">
        <h1>ProductForm</h1>
        <form onSubmit={this.submit}>
            <input type="text" placeholder="Product Name" ref = "name"/>
            <input type="text" placeholder="Product Price" ref = "price"/>
            <button>Create Product</button>
        </form>
        <hr/>
        </div>
      );
    }
  }
  export default ProductForm;  