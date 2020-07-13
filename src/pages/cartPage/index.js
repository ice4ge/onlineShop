import React, { useRef } from 'react';

import { HeaderComponent } from '../../components/header';
import { Footer } from '../../components/footer';
import { CartProductStateComponent } from '../../components/cartProductState';
import { CartCheckOut } from '../../components/cartCheckout';
import { SideBar } from '../../components/sideBar';

export const CartPage = () => {
    const mainBody = useRef();
    const sideBarOpen = () => {
        const target = mainBody.current.style;
        if (target.left == '0px') {
            target.left = '300px';
        } else {
            target.left = '0px';
        }
    }
    const style = {
        left: '0px',
    }
    return (
        <div>
            <SideBar sideBarOpen={sideBarOpen} />
            <div id="wrapper" ref={mainBody} style={style}>
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
