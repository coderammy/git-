import axios from "axios";
import React, { Component } from "react";
import ProductDetails from "./ProductDetails";
export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
    };
  }

  componentDidMount() {
    axios.get(`https://api.health-mall.in.net/master/products`).then((res) => {
      const products = res.data.docs;
      this.setState({ products });
    });
  }

  render() {
    return (
      <>
        {this.state.products ? (
          this.state.products.map((product) => (
            <ProductDetails
              key={product._id}
              productName={product.productName}
              sku={product.sku}
              upc={product.upc}
              stock={product.stock}
            />
          ))
        ) : (
          <h5>wait products on the way</h5>
        )}
      </>
    );
  }
}
