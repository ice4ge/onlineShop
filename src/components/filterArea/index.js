import React from 'react';
import { filterBytypes } from './filterData';

export const FilterArea = ({filter}) => {
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
                                                <li onClick={()=>filter(subs.target, subs.filter)}><p>{subs.text}</p></li>
                                            )}
                                        </ul>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="widget price mb-50">
                    <h6 className="widget-title mb-30">Filter by Price</h6>
                    <div className="widget-desc">
                        <div className="slider-range">
                            <div data-min="0" data-max="3000" data-unit="$" className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min="0" data-value-max="1350" data-label-result="Price:">
                                <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                                <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                                <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                            </div>
                            <div className="range-price">Price: 0 - 1350</div>
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
                        <ul className="d-flex justify-content-between">
                            <li><p>XS</p></li>
                            <li><p>S</p></li>
                            <li><p>M</p></li>
                            <li><p>L</p></li>
                            <li><p>XL</p></li>
                            <li><p>XXL</p></li>
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