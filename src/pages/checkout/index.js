import React from 'react';

import { HeaderComponent } from '../../components/header';
import { Footer } from '../../components/footer';
import { BillingInputComponent } from '../../components/billingInput';
import { OrderComponent } from '../../components/ordering';
import { SideBar } from '../../components/sideBar';

export const Checkout = () => {
    const style = {
        left: '0px',
    }
    return (
        <div>
            <SideBar />
            <div id="wrapper" style={style}>
                <HeaderComponent />
                <div className="checkout_area section_padding_100">
                    <div className="container">
                        <div className="row">
                            <BillingInputComponent />
                            <OrderComponent />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
