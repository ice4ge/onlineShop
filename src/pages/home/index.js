import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import * as actions from '../../store/actions/actionNames';
// import Slider from 'react-animated-slider';
// import 'react-animated-slider/build/horizontal.css';

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


export const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: actions.TOTAL_PRODUCTS });
        dispatch({ type: actions.PREVIEW_CHANGE });
    }, [])
    const products = useSelector(state => state.ProductsService);
    const PreviewState = useSelector(state => state.ProductPreview);

    const mainBody = useRef();
    const sideBarOpen = () => {
        const target = mainBody.current.style;
        if (target.left == '0px') {
            target.left = '300px';
            mainBody.current.className = "karl-side-menu-open";
        } else {
            target.left = '0px';
            mainBody.current.className = "";
        }
    }
    const style = {
        left: '0px',
    }

    return (
        <div>
            <SideBar sideBarOpen={sideBarOpen} />
            <div id="wrapper" ref={mainBody} style={style}>
                <HeaderComponent sideBarOpen={sideBarOpen} />
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
