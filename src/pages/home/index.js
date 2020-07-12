import React from 'react';
import { HeaderComponent } from '../../components/header';
import { ImageCarousel } from '../../components/carousel';
import { CategoryComponent } from '../../components/Category';
import { NewProductsComponent } from '../../components/NewProducts';
import { OfferAreaComponent } from '../../components/offerArea';
import { Footer } from '../../components/footer';


export const HomePage = () => {
    return (
        <div>
            <HeaderComponent />
            <ImageCarousel />
            <CategoryComponent />
            <NewProductsComponent />
            <OfferAreaComponent />
            <Footer />
        </div>
    )
}
