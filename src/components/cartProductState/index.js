import React from 'react';

export const CartProductStateComponent = () => {
    return (
        <div className="row">
                    <div className="col-12">
                        <div className="cart-table clearfix">
                            <table className="table table-responsive">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="cart_product_img d-flex align-items-center">
                                            <a href="#"><img src="img/product-img/product-9.jpg" alt="Product"/></a>
                                            <h6>Yellow Cocktail Dress</h6>
                                        </td>
                                        <td className="price"><span>$49.88</span></td>
                                        <td className="qty">
                                            <div className="quantity">
                                                <span className="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i className="fa fa-minus" aria-hidden="true"></i></span>
                                                <input type="number" className="qty-text" id="qty" step="1" min="1" max="99" name="quantity" value="1"/>
                                                <span className="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i className="fa fa-plus" aria-hidden="true"></i></span>
                                            </div>
                                        </td>
                                        <td className="total_price"><span>$49.88</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="cart-footer d-flex mt-30">
                            <div className="back-to-shop w-50">
                                <a href="shop-grid-left-sidebar.html">Continue shooping</a>
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
