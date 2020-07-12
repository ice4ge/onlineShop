import React from 'react';

import { HeaderComponent } from '../../components/header';
import { Footer } from '../../components/footer';
import { BillingInputComponent } from '../../components/billingInput';
import { OrderComponent } from '../../components/ordering';

export const Checkout = () => {
    return (
        <div>
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
    )
}
