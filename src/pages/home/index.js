import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import * as actions from '../../store/actions/actionNames';

import { HeaderComponent } from '../../components/header';

import { ImageCarousel1 } from '../../components/carousel';
import { ImageCarousel2 } from '../../components/carousel';
import { ImageCarousel3 } from '../../components/carousel';

import { CategoryComponent } from '../../components/category';
import { NewProductsComponent } from '../../components/NewProducts';
import { OfferAreaComponent } from '../../components/offerArea';
import { Footer } from '../../components/footer';
import { PreviewModal } from '../../components/previewModal';
import { SideBar } from '../../components/sideBar';

import firebase from '../../components/firebase';


export const HomePage = () => {
    const dispatch = useDispatch();
    const store = firebase.firestore();
    console.log("firebase", store.collectionGroup);

    useEffect(() => {
        dispatch({ type: actions.PREVIEW_CHANGE });
    }, [])
    const products = useSelector(state => state.ProductsService);
    const PreviewState = useSelector(state => state.ProductPreview);
    const style = {
        left: '0px'
    }
    // useEffect(()=> {
    //     store.collection('AllShops').doc('Gucci').collection('products').get()
    //     .then(response => {
    //         console.log('This is data from firebase', response);
    //     })
    //     .catch(error => {
    //         console.log('err fetch data');
    //     })
    // })


    return (
        <div>
            <SideBar />
            <div id="wrapper" style={style}>
                <HeaderComponent />
                <section className="welcome_area">
                    <div className="welcome_slides owl-carousel">
                        <Carousel>
                            <Carousel.Item>
                                <ImageCarousel1></ImageCarousel1>
                            </Carousel.Item>
                            <Carousel.Item>
                                <ImageCarousel2></ImageCarousel2>
                            </Carousel.Item>
                            <Carousel.Item>
                                <ImageCarousel3></ImageCarousel3>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </section>
                <CategoryComponent />
                <PreviewModal PreviewState={PreviewState} />
                <NewProductsComponent products={products} />
                <OfferAreaComponent />
                <Footer />
            </div>
        </div>
    )
}
