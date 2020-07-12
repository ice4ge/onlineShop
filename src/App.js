import React from 'react';

import { HomePage } from './pages/home';
import { ShopPage } from './pages/shopPage';
import { CartPage } from './pages/cartPage';
import { Checkout } from './pages/checkout';

import { Switch, Route, Redirect } from "react-router-dom";

export default function App() {
  return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/checkout" exact component={Checkout} />
      </Switch>

  );
};