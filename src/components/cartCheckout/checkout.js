import React from 'react';

import {
    Link
  } from "react-router-dom";

export const CartCheckOut = () => {
    return (
        <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="coupon-code-area mt-70">
                            <div className="cart-page-heading">
                                <h5>Cupon code</h5>
                                <p>Enter your cupone code</p>
                            </div>
                            <form action="#">
                                <input type="search" name="search" placeholder="#569ab15"/>
                                <button type="submit">Apply</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="shipping-method-area mt-70">
                            <div className="cart-page-heading">
                                <h5>Shipping method</h5>
                                <p>Select the one you want</p>
                            </div>

                            <div className="custom-control custom-radio mb-30">
                                <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
                                <label className="custom-control-label d-flex align-items-center justify-content-between" for="customRadio1"><span>Next day delivery</span><span>$4.99</span></label>
                            </div>

                            <div className="custom-control custom-radio mb-30">
                                <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
                                <label className="custom-control-label d-flex align-items-center justify-content-between" for="customRadio2"><span>Standard delivery</span><span>$1.99</span></label>
                            </div>

                            <div className="custom-control custom-radio">
                                <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input"/>
                                <label className="custom-control-label d-flex align-items-center justify-content-between" for="customRadio3"><span>Personal Pickup</span><span>Free</span></label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="cart-total-area mt-70">
                            <div className="cart-page-heading">
                                <h5>Cart total</h5>
                                <p>Final info</p>
                            </div>

                            <ul className="cart-total-chart">
                                <li><span>Subtotal</span> <span>$59.90</span></li>
                                <li><span>Shipping</span> <span>Free</span></li>
                                <li><span><strong>Total</strong></span> <span><strong>$59.90</strong></span></li>
                            </ul>
                            <Link to="/checkout" className="btn karl-checkout-btn">Proceed to checkout</Link>
                        </div>
                    </div>
                </div>
    )
}