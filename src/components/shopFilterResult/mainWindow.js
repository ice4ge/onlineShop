import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { CART_ADD } from '../../store/actions/actionNames';
import { PREVIEW_SET } from '../../store/actions/actionNames';
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";


import { Carousel } from 'react-bootstrap';



export const ShopFilteredResult = ({ products }) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(12);
    const scroll = useRef();

    //... Add to cart function ..
    const addCart = (product) => {
        dispatch({ type: CART_ADD, payLoad: product });
    }

    //... Turn on preview modal with selected product ..
    const setProductPreview = (preview) => {
        dispatch({ type: PREVIEW_SET, payLoad: preview });
    }

    //... Page pagination ..
    useEffect(() => {
        const initialCount = Math.round(products.length / 12);
        setCount(initialCount);
    }, [products]);
    const paginationPage = (number) => {
        setStart(number * 12 - 12);
        setEnd(number * 12);
    }
    const scrollRight = () => {
        console.log(scroll.current.scrollTop)
        if(count > 5 ) {
            scroll.current.scrollBy(50, 0)
        }
    }
    const scrollLeft = () => {
        scroll.current.scrollTop = 0;
        if(count > 5 ) {
            scroll.current.scrollBy(-50, 0)
        }
    }
    return (
        <>
            <div className="shop_grid_product_area">
                <div className="row">
                    {products.slice(start, end).map((item, i) =>
                        <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.2s">
                            <div className="product-img">
                                <Carousel pause={true}>
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
                <nav aria-label="Page navigation" className="navigation">
                    {count > 0 && <FaAngleDoubleLeft onClick={() => scrollLeft()} />}
                    <ul ref={scroll} className="pagination pagination-sm" id="style-15">
                        {Array.from(Array(count), (e, i) => {
                            return <li key={i} className="page-item" onClick={() => paginationPage(i + 1)}><a className="page-link">{i + 1}</a></li>
                        })}
                    </ul>
                    {count > 0 && <FaAngleDoubleRight onClick={() => scrollRight()}/>}
                </nav>
            </div>
        </>
    )
}
