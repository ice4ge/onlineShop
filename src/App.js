import React from 'react';

import { HomePage } from './pages/home';
import { ShopPage } from './pages/shopPage';
import { CartPage } from './pages/cartPage';
import { Checkout } from './pages/checkout';

import firebase from './components/firebase';
import { useSelector, useDispatch } from 'react-redux';

import { Switch, Route, Redirect } from "react-router-dom";

import { TOTAL_PRODUCTS } from './store/actions/actionNames';

export default function App() {
  const store = firebase.firestore();
  const dispatch = useDispatch();
  store.collection("AllShops")
        .get()
        .then(querySnapshot => {
           const data = [...querySnapshot.docs.map(doc => doc.data())];
           console.log('llllllllllllll', data)
            
            dispatch({type: TOTAL_PRODUCTS, payLoad: data});
        });
  return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/checkout" exact component={Checkout} />
      </Switch>

  );
};