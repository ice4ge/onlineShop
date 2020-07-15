import React from 'react';
import { PREVIEW_SET } from '../../store/actions/actionNames';
import { CART_ADD } from '../../store/actions/actionNames';
import { useDispatch } from 'react-redux';
import './style.css';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Carousel } from 'react-bootstrap';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



export const ProductsList = (props) => {
    const dispatch = useDispatch();

    const setProductPreview = () => {
        dispatch({ type: PREVIEW_SET, payLoad: props.Obj });
    }
    const addCart = () => {
        dispatch({ type: CART_ADD, payLoad: props.Obj });
    }
    return (
        <div class="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.2s">
            <div className="product_item">
                <div class="product-img">
                    <Carousel controls={false}>
                        {props.img.map((item, i) =>
                            <Carousel.Item>
                                <div className="new_product_item">
                                    <img className="carouse_images" src={item} alt="" />
                                    <div class="product-quicview">
                                        <a href="#" data-toggle="modal" data-target="#quickview" onClick={() => setProductPreview()}><i class="ti-plus"></i></a>
                                    </div>
                                </div>
                            </Carousel.Item>
                        )}
                    </Carousel>
                </div>
                <div class="product-description">
                    <h4 class="product-price">${props.price}</h4>
                    <p>{props.description}</p>
                    <p class="add-to-cart-btn" onClick={() => addCart()}>ADD TO CART</p>
                </div>
            </div>

        </div>

    )
}
