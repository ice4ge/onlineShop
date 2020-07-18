import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import { BagState } from './bagMenu';

export const HeadSection = () => {

    const dropDown = useRef();
    const [priceCount, setPrice] = useState(0);
    const bagProducts = useSelector(state => state.CartReducer);

    //--- Drop down menu style--
    const DropStyle = {
        display: 'none'
    }

    //... Menu drop down function ..
    const openDrop = () => {
        const target = dropDown.current.style;
        if (target.display == 'none') {
            target.display = 'block';
        } else {
            target.display = 'none';
        }
    }

    //... Count total price in cart..
    useEffect(() => {
        for (var i = 0; i < bagProducts.length; i++) {
            setPrice(priceCount + bagProducts[i].price);
        }
    }, [bagProducts]);

    //...Side bar toggle function..
    const sideBarToggle = () => {
        const target = document.getElementById('wrapper').style;
        if (target.left == '0px') {
            target.left = '300px';
            document.getElementById('wrapper').className = "karl-side-menu-open";
        } else {
            target.left = '0px';
            document.getElementById('wrapper').className = "";
        }
    }

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
                                        <p onClick={() => openDrop()} className="drop_down">
                                            {bagProducts.length >= 0 && <span className="cart_quantity">{bagProducts.length}</span>}
                                            <i className="ti-bag"></i> Your Bag ${priceCount}</p>
                                        <ul className="cart-list" ref={dropDown} style={DropStyle}>
                                            {bagProducts.map((item, i) =>
                                                <BagState bagProducts={bagProducts[i]} />
                                            )}
                                            <li className="total">
                                                <span className="pull-right">Total: ${priceCount}</span>
                                                <Link className="btn btn-sm btn-cart" to={"/cart"}>Cart</Link>
                                                <Link className="btn btn-sm btn-checkout" to={"/checkout"}>Checkout</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="header-right-side-menu ml-15">
                                        <p id="sideMenuBtn" onClick={() => sideBarToggle()}><i className="ti-user" aria-hidden="true"></i></p>
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