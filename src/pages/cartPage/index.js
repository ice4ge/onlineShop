import React from 'react';

import { HeaderComponent } from '../../components/header';
import { Footer } from '../../components/footer';
import { CartProductStateComponent } from '../../components/cartProductState';
import { CartCheckOut } from '../../components/cartCheckout';

export const CartPage = () => {
    return (
        <div>
            <HeaderComponent />
            <div class="cart_area section_padding_100 clearfix">
                <div class="container">
                    <CartProductStateComponent />
                    <CartCheckOut />
                </div>
            </div>
            <Footer />
        </div>
    )
}
