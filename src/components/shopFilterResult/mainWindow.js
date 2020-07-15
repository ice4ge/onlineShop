import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { CART_ADD } from '../../store/actions/actionNames';
import { PREVIEW_SET } from '../../store/actions/actionNames';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import { Carousel } from 'react-bootstrap';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);




export const ShopFilteredResult = ({ products }) => {

    const dispatch = useDispatch();



    const addCart = (product) => {
        dispatch({ type: CART_ADD, payLoad: product });
    }

    const setProductPreview = (preview) => {
        dispatch({ type: PREVIEW_SET, payLoad: preview });
    }

    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(Math.round(products.length / 12))
    }, [products]);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(12);
    const paginationPage = (number) => {
        setStart(number * 12 - 12);
        setEnd(number * 12);
    }

    console.log('filter', products);
    return (
        <div className="col-12 col-md-8 col-lg-9">
            <div className="shop_grid_product_area">
                <div className="row">
                    {products.slice(start, end).map((item, i) =>
                        <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.2s">

                            <div className="product-img">
                                <Carousel controls={false} pause={true}>
                                    {item.img.map((index, i) =>
                                        <Carousel.Item>
                                            <img className="carouse_images" src={index} alt="" />
                                        </Carousel.Item>
                                    )}
                                </Carousel>
                                <div className="product-quicview">
                                    <a href="#" data-toggle="modal" data-target="#quickview" onClick={() => setProductPreview(item)}><i className="ti-plus"></i></a>
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
                        {Array.from(Array(count), (e, i) => {
                            return <li key={i} className="page-item" onClick={() => paginationPage(i + 1)}><a className="page-link">{i + 1}</a></li>
                        })}
                    </ul>
                </nav>
            </div>

        </div>
    )
}
