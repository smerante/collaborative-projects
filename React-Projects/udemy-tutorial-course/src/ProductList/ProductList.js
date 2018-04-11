import React, { Component } from 'react';

import './ProductList.css';
import Total from '../Total/Total';
import ProductComponent from '../Product/App';
import ProductForm from '../ProductForm/ProductForm';

class ProductList extends Component {
  constructor(props){
    super(props);
    this.state={
      totalPrice:0,
      productList:[
        {name: "Android", price:699},
        {name: "Google", price:799},
        {name: "Apple", price:999}
      ]
    };
  }
   showProduct(amt, name, price){
     alert("You've Selected "+amt+" " + name+"(s) -$" + price*amt);
   }
   calculateTotalPrice = (price) =>{
      this.setState({totalPrice: this.state.totalPrice + price},function(){
      })
   }
   createProduct = (product) =>{
      this.setState({
        productList: this.state.productList.concat(product)
      });
   }
    render() {
      var form = this;
      var products = this.state.productList.map(function(product){
        return (
          <ProductComponent name={product.name} price={product.price} parentDisplayInfo={form.showProduct} parentCalculatePrice={form.calculateTotalPrice}/>
        )
      });
      return (
        <div className="ProductList">
        <ProductForm handleCreateProduct={this.createProduct}/>
        <h4>ProductList </h4>
        <hr/>
        {products}
        <Total totalPrice={this.state.totalPrice}/>
        </div>
      );
    }
  }
  export default ProductList;
  