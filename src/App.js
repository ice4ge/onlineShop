import React from 'react';
import { HomePage } from './pages/home';
import { ShopPage } from './pages/shopPage';
import { CartPage } from './pages/cartPage';
import { Checkout } from './pages/checkout';
import firebase from './components/firebase';
import { useDispatch } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import { TOTAL_PRODUCTS } from './store/actions/actionNames';

export default function App() {
  const store = firebase.firestore();
  const dispatch = useDispatch();
  const dataRef = store.collection("AllShops").doc("Gucci").collection('products');
  let realData = [];
  dataRef.get()
    .then(Response => {
      Response.forEach(document => {
        const itemObject = document.data();
        const productItems = {
          name: itemObject.productName,
          img: itemObject.images,
          price: itemObject.productPrice,
          description: itemObject.description,
          gender: itemObject.gender,
          brand: 'Gucci',
          category: itemObject.category,
          size: itemObject.productSize,
          color: itemObject.color,
          ar: itemObject.ar,
          sale: itemObject.sale,
          type: itemObject.type,
          date: itemObject.date
      };
      realData.push(productItems);
      });
      dispatch({type: TOTAL_PRODUCTS, payLoad: realData});
    })
    

  return (
 <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/checkout" exact component={Checkout} />
      </Switch>
     
  );
};