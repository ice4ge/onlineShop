import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CART_PRODUCTS_CLEAR } from '../../store/actions/actionNames';

import { CartProducts } from './products';
import { Link } from 'react-router-dom';

export const CartProductStateComponent = () => {
    const products = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();
    console.log(products);

    const clearCartProducts = () => {
        dispatch({type: CART_PRODUCTS_CLEAR})
    }

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
                        <Link to="/shop">Continue shoping</Link>
                    </div>
                    <div className="update-checkout w-50 text-right">
                        <p onClick={() => clearCartProducts()}>clear cart</p>
                        <p>Update cart</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
