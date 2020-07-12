import React from 'react';
import { Link } from "react-router-dom";

export const HeadSection = () => {
    return (
        <header className="header_area">
                <div className="top_header_area">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center justify-content-end">

                            <div className="col-12 col-lg-7">
                                <div className="top_single_area d-flex align-items-center">
                                    <div className="top_logo">
                                        <a href="#"><img src="img/core-img/logo.png" alt="FlyShop-Logo" /></a>
                                    </div>
                                    <div className="header-cart-menu d-flex align-items-center ml-auto">
                                        <div className="cart">
                                            <a href="#" id="header-cart-btn" target="_blank"><span className="cart_quantity">2</span> <i className="ti-bag"></i> Your Bag $20</a>
                                            <ul className="cart-list">
                                                <li>
                                                    <a href="#" className="image"><img src="img/product-img/product-10.jpg" className="cart-thumb" alt="" /></a>
                                                    <div className="cart-item-desc">
                                                        <h6><a href="#">Women's Fashion</a></h6>
                                                        <p>1x - <span className="price">$10</span></p>
                                                    </div>
                                                    <span className="dropdown-product-remove"><i className="icon-cross"></i></span>
                                                </li>
                                                <li>
                                                    <a href="#" className="image"><img src="img/product-img/product-11.jpg" className="cart-thumb" alt="" /></a>
                                                    <div className="cart-item-desc">
                                                        <h6><a href="#">Women's Fashion</a></h6>
                                                        <p>1x - <span className="price">$10</span></p>
                                                    </div>
                                                    <span className="dropdown-product-remove"><i className="icon-cross"></i></span>
                                                </li>
                                                <li className="total">
                                                    <span className="pull-right">Total: $20.00</span>
                                                    <a href="cart.html" className="btn btn-sm btn-cart">Cart</a>
                                                    <a href="checkout.html" className="btn btn-sm btn-checkout">Checkout</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="header-right-side-menu ml-15">
                                            <a href="#" id="sideMenuBtn"><i className="ti-user" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="main_header_area">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-12 d-md-flex justify-content-between">
                                <div className="header-social-area">
                                    <a href="https://www.instagram.com/flyshop.am/"><span className="karl-level">Download</span> <i className="fa fa-apple" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-android" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                </div>
                                <div className="main-menu-area">
                                    <nav className="navbar navbar-expand-lg align-items-start">

                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#karl-navbar" aria-controls="karl-navbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"><i className="ti-menu"></i></span></button>

                                        <div className="collapse navbar-collapse align-items-start collapse">
                                            <ul className="navbar-nav animated" id="nav">
                                                <li className="nav-item active"><Link className="dropdown-item" to="/">Home</Link></li>
                                                <li className="nav-item dropdown">
                                                    <Link className="dropdown-item" to="/shop">Shop</Link>
                                                </li>
                                                <li className="nav-item"><Link className="dropdown-item" to="/cart">Cart</Link></li>
                                                <li className="nav-item"><Link className="dropdown-item" to="/checkout">Checkout</Link></li>
                                                <li className="nav-item"><Link className="dropdown-item" to="/">Contact</Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="help-line">
                                    <a href="tel:+374-33-988-988"><i className="ti-headphone-alt"></i> +374-33-988-988</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    )
}