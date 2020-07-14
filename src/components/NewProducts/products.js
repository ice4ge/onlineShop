import React from 'react';
import { PREVIEW_SET } from '../../store/actions/actionNames';
import { CART_ADD } from '../../store/actions/actionNames';
import { useDispatch } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';

export const ProductsList = (props) => {
    const dispatch = useDispatch();
    console.log("newProduct", props.img);

    const setProductPreview = () => {
        dispatch({ type: PREVIEW_SET, payLoad: props.Obj });
    }
    const addCart = () => {
        dispatch({ type: CART_ADD, payLoad: props.Obj });
    }
    return (
        <div class="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.2s">
            {props.productState == 'ALL' &&
                <div className="product_item">
                    <div class="product-img">
                            {props.img.map((item, i) =>
                                    <div className="new_product_item">
                                        <img src={item} alt="" />
                                        <div class="product-quicview">
                                            <a href="#" data-toggle="modal" data-target="#quickview" onClick={() => setProductPreview()}><i class="ti-plus"></i></a>
                                        </div>
                                    </div>
                            )}
                    </div>
                    <div class="product-description">
                        <h4 class="product-price">${props.price}</h4>
                        <p>{props.description}</p>
                        <p class="add-to-cart-btn" onClick={() => addCart()}>ADD TO CART</p>
                    </div>
                </div>
            }

        </div>

    )
}
