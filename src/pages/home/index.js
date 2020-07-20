import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import * as actions from '../../store/actions/actionNames';

//--- Components import --
import { HeaderComponent } from '../../components/header';
import { ImageCarousel1, ImageCarousel2, ImageCarousel3 } from '../../components/carousel';
import { CategoryComponent } from '../../components/category';
import { NewProductsComponent } from '../../components/NewProducts';
import { OfferAreaComponent } from '../../components/offerArea';
import { Footer } from '../../components/footer';
import { PreviewModal } from '../../components/previewModal';
import { SideBar } from '../../components/sideBar';



export const HomePage = () => {
    const dispatch = useDispatch();

    //... Function that turn the preview modal on ..
    useEffect(() => {
        dispatch({ type: actions.PREVIEW_CHANGE });
    }, [])

    //--- Products from redux store --
    const products = useSelector(state => state.ProductsService);

    //--- The state of preview modal where it is turn on or off --
    const PreviewState = useSelector(state => state.ProductPreview);

    //--- Main body style when side bar is hidden --
    const style = {
        left: '0px'
    }
    console.log('home page products', products);

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
