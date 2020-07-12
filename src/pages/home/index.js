import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import * as actions from '../../store/actions/actionNames';

import { HeaderComponent } from '../../components/header';
import { ImageCarousel } from '../../components/carousel';
import { CategoryComponent } from '../../components/category';
import { NewProductsComponent } from '../../components/NewProducts';
import { OfferAreaComponent } from '../../components/offerArea';
import { Footer } from '../../components/footer';
import { SideBar } from '../../components/sideBar';

export const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: actions.TOTAL_PRODUCTS});
    },[])
    const products = useSelector(state => state.ProductsService);
    return (
        <div id="wrapper">
            {/* <SideBar /> */}
            <HeaderComponent />
            <ImageCarousel />
            <CategoryComponent />
            <NewProductsComponent products={products} />
            <OfferAreaComponent />
            <Footer />
        </div>
    )
}
