import React from 'react';
import { useDispatch } from 'react-redux';

import { CART_ADD } from '../../store/actions/actionNames';
import { PREVIEW_SET } from '../../store/actions/actionNames';

export const ShopFilteredResult = ({ products }) => {

    const dispatch = useDispatch();


    const addCart = (product) => {
        dispatch({type: CART_ADD, payLoad: product});
    }

    const setProductPreview = (preview) => {
        dispatch({type: PREVIEW_SET, payLoad: preview});
    }
    return (
        <div className="col-12 col-md-8 col-lg-9">
            <div className="shop_grid_product_area">
                <div className="row">
                    {products.map((item, i) =>
                        <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.2s">

                            <div className="product-img">
                                {item.img.map((index, i) => 
                                    <img src={index} alt="" />
                                )}
                                <div className="product-quicview">
                                    <a href="#" data-toggle="modal" data-target="#quickview" onClick={()=>setProductPreview(item)}><i className="ti-plus"></i></a>
                                </div>
                            </div>
                            <div className="product-description">
                                <h4 className="product-price">${item.price}</h4>
                                <p>{item.name}</p>
                                <p class="add-to-cart-btn" onClick={() => addCart(item)}>ADD TO CART</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="shop_pagination_area wow fadeInUp" data-wow-delay="1.1s">
                <nav aria-label="Page navigation">
                    <ul className="pagination pagination-sm">
                        <li className="page-item active"><a className="page-link">01</a></li>
                        <li className="page-item"><a className="page-link">02</a></li>
                        <li className="page-item"><a className="page-link">03</a></li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}
