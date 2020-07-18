import React from 'react';

//--- Components import --
import { HeaderComponent } from '../../components/header';
import { Footer } from '../../components/footer';
import { CartProductStateComponent } from '../../components/cartProductState';
import { CartCheckOut } from '../../components/cartCheckout';
import { SideBar } from '../../components/sideBar';

export const CartPage = () => {
    const style = {
        left: '0px',
    }
    return (
        <div>
            <SideBar />
            <div id="wrapper" style={style}>
                <HeaderComponent />
                <div class="cart_area section_padding_100 clearfix">
                    <div class="container">
                        <CartProductStateComponent />
                        <CartCheckOut />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
