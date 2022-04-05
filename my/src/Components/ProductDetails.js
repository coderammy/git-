import React, { Component } from "react";
import "../index.css";


export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1 className="container">{this.props.productName} 
        <h3>sku</h3>{this.props.sku}
        <h4>upc</h4>
        {this.props.upc}
        <h5>stock</h5>
        {this.props.stock}</h1>
      </>
    );
  }
}

{
  /* <>
{this.props.productName}
{this.props.sku}
{this.props.upc}
{this.props.stock}
</> */
}
