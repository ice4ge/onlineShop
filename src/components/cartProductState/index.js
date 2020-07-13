import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CartProducts } from './products';

export const CartProductStateComponent = () => {
    const products = useSelector(state => state.CartReducer);

    return (
        <div className="row">
            <div className="col-12">
                <div className="cart-table clearfix">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th className='left'>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((item, i) =>
                                <CartProducts productList={products[i]} />
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="cart-footer d-flex mt-30">
                    <div className="back-to-shop w-50">
                        <a href="shop-grid-left-sidebar.html">Continue shoping</a>
                    </div>
                    <div className="update-checkout w-50 text-right">
                        <a href="#">clear cart</a>
                        <a href="#">Update cart</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
