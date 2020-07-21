import React, { useEffect, useState } from 'react';
import { HomePage } from './pages/home';
import { ShopPage } from './pages/shopPage';
import { CartPage } from './pages/cartPage';
import { Checkout } from './pages/checkout';
import firebase from './components/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import { TOTAL_PRODUCTS, SHOP_NAMES } from './store/actions/actionNames';
import v4 from 'uuid';

export default function App() {
  const store = firebase.firestore();
  const dispatch = useDispatch();
  const shopNames = useSelector(state => state.shopNames);
  const [pro, setPro] = useState([]);

  useEffect(() => {
    store.collection('AllShops').get().then((snapshot) => {
      let allShops = []
      snapshot.docs.forEach(doc => {
        allShops.push(doc.data().shopName)
      })
      dispatch({type: SHOP_NAMES, payLoad: allShops})
    })
  }, [])
  useEffect(() => {
    shopNames.map(function (names) {
      const dataRef = store.collection("AllShops").doc(names).collection('products');
      dataRef.get()
        .then(Response => {
          Response.forEach(document => {
            const itemObject = document.data();
            const productItems = {
              id: v4(),
              name: itemObject.productName,
              img: itemObject.images,
              price: Math.round(itemObject.productPrice - (itemObject.productPrice / 100) * itemObject.sale),
              description: itemObject.description,
              gender: itemObject.gender,
              brand: names,
              category: itemObject.category,
              size: itemObject.productSize,
              color: itemObject.color,
              ar: itemObject.ar,
              sale: itemObject.sale,
              type: itemObject.type,
              date: itemObject.date
            };
            setPro([...pro, pro.push(productItems)]);
          })
        })
    })
      dispatch({ type: TOTAL_PRODUCTS, payLoad: pro });
  },[shopNames])

  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/shop" exact component={ShopPage} />
      <Route path="/cart" exact component={CartPage} />
      <Route path="/checkout" exact component={Checkout} />
    </Switch>

  );
};