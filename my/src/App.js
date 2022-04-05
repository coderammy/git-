import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import Product from "./Components/Product";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <NavLink exact to="/">
            <h1>Product</h1>
          </NavLink>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Product} />
            <Route path={"/productDetails"} component={ProductDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
