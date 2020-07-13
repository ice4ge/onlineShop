import React from 'react';

import { HomePage } from './pages/home';
import { ShopPage } from './pages/shopPage';
import { CartPage } from './pages/cartPage';
import { Checkout } from './pages/checkout';

import firebase from './components/firebase';
import { useSelector, useDispatch } from 'react-redux';

import { Switch, Route, Redirect } from "react-router-dom";

export default function App() {
  const store = firebase.firestore();
  store.collection("AllShops")
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());

            for(var i = 0; i < data.length; i++) {
              let productList = [];
                for(var k = 0; k < data[i].products.length; k++) {
                    for(var j = 0; j < data[i].products[k].images.length; j++) {
                      const Object = {
                        name: data[i].products[k].productName,
                        img: data[i].products[k].images[j],
                        price: data[i].products[k].productPrice,
                        description: data[i].products[k].description,
                        gender: data[i].products[k].gender,
                        brand: data[i].shopName,
                        category: data[i].products[k].category,
                        size: data[i].products[k].productSize,
                        color: data[i].products[k].color,
                        ar: data[i].products[k].ar,
                        sale: data[i].products[k].sale,
                        type: data[i].products[k].type
                      }
                      productList.push(Object);
                    }
                }
            }

            console.log(data); // array of cities objects
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