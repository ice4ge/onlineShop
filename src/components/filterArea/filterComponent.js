import React, { useState } from 'react';

import {
    filterBytypes,
    typeSubClothingFilters,
    typeSubShoesFilters,
    typeSubAccessoryFilters,
} from './filterData';

export const FilterArea = (props) => {

    const [price, setPrice] = useState(400000);
    const [typeFilter, setTypeFilter] = useState(typeSubClothingFilters);

    const filterByPrice = (e) => {
        filter('price', e);
        setPrice(e);
    }
    const filter = props.filter;


    //... Type filter names switch ..
    const changeType = (text) => {
        if (text == 'Clothes') {
            setTypeFilter(typeSubClothingFilters)
        } else if (text == 'Shoes') {
            setTypeFilter(typeSubShoesFilters)
        } else {
            setTypeFilter(typeSubAccessoryFilters)
        }
    }

    //...Size filter highlight ..
    const highlighted = document.getElementsByClassName('highlight');
    const highlight = (count) => {
        for (var i = 0; i < highlighted.length; i++) {
            highlighted[i].style.background = 'white';
            highlighted[i].style.color = 'black';
        }
        highlighted[count].style.background = 'red';
        highlighted[count].style.color = 'white';
    }

    return (
        <div className="col-12 col-md-4 col-lg-3">
            <div className="shop_sidebar_area">

                <div className="widget catagory mb-50">
                    <div className="nav-side-menu">
                        <h6 className="mb-0">Filter</h6>
                        <div className="menu-list">
                            <ul id="menu-content2" className="menu-content collapse out">
                                {filterBytypes.map((item, i) =>
                                    <li data-toggle="collapse" data-target={`#${item.toggleTarget}`} className="collapsed">
                                        <p>{item.name}</p>
                                        <ul className="sub-menu collapse" id={item.toggleTarget}>
                                            {item.subProperty.map((subs, k) =>
                                                <>
                                                    <li onClick={() => filter(subs.target, subs.filter)}
                                                        onMouseDown={() => changeType(subs.text)}
                                                    >
                                                        <p>{subs.text}</p>
                                                    </li>
                                                </>
                                            )}
                                        </ul>
                                    </li>
                                )}
                                <li data-toggle="collapse" data-target='#bags2' className="collapsed">
                                    <p>Type</p>
                                    <ul className="sub-menu collapse" id='bags2'>
                                        {typeFilter.map((subs, k) =>
                                            <li onClick={() => filter(subs.target, subs.type)}><p>{subs.text}</p></li>
                                        )}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="widget price mb-50">
                    <h6 className="widget-title mb-30">Filter by Price</h6>
                    <div className="widget-desc">
                        <div className="slider-range">
                            <input type="range" onChange={(event) => filterByPrice(event.target.value)} className="price_filter" min="1" max="400000" />
                            <div className="range-price">Price: 0 - {price}</div>
                        </div>
                    </div>
                </div>

                <div className="widget color mb-70">
                    <h6 className="widget-title mb-30">Filter by Color</h6>
                    <div className="widget-desc">
                        <ul className="d-flex justify-content-between">
                            <li className="gray"><p><span>(3)</span></p></li>
                            <li className="red"><p><span>(25)</span></p></li>
                            <li className="yellow"><p><span>(112)</span></p></li>
                            <li className="green"><p><span>(72)</span></p></li>
                            <li className="teal"><p><span>(9)</span></p></li>
                            <li className="cyan"><p><span>(29)</span></p></li>
                        </ul>
                    </div>
                </div>

                <div className="widget size mb-50">
                    <h6 className="widget-title mb-30">Filter by Size</h6>
                    <div className="widget-desc">
                        <ul className="d-flex justify-content-between" id="size_filter">
                            {props.size && props.size.map((item, i) =>
                                <li onClick={() => filter('size', item)} onMouseDown={() => highlight(i)}><p id="general" className="highlight">{item}</p></li>
                            )}
                        </ul>
                    </div>
                </div>

                <div className="widget recommended">
                    <h6 className="widget-title mb-30">Recommended</h6>

                    <div className="widget-desc">
                        <div className="single-recommended-product d-flex mb-30">
                            <div className="single-recommended-thumb mr-3">
                                <img src="img/product-img/product-10.jpg" alt="" />
                            </div>
                            <div className="single-recommended-desc">
                                <h6>Men’s T-shirt</h6>
                                <p>$ 39.99</p>
                            </div>
                        </div>
                        <div className="single-recommended-product d-flex mb-30">
                            <div className="single-recommended-thumb mr-3">
                                <img src="img/product-img/product-11.jpg" alt="" />
                            </div>
                            <div className="single-recommended-desc">
                                <h6>Blue mini top</h6>
                                <p>$ 19.99</p>
                            </div>
                        </div>
                        <div className="single-recommended-product d-flex">
                            <div className="single-recommended-thumb mr-3">
                                <img src="img/product-img/product-12.jpg" alt="" />
                            </div>
                            <div className="single-recommended-desc">
                                <h6>Women’s T-shirt</h6>
                                <p>$ 39.99</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}