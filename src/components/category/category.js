import React from 'react';
import { Link } from "react-router-dom";

export const CategoryComponent = () => {
    return (
        <div>
             <section class="top_catagory_area d-md-flex clearfix">
            <div class="single_catagory_area d-flex align-items-center bg-img2">
                <div class="catagory-content">
                    <h6>On Accesories</h6>
                    <h2>Sale 30%</h2>
                    <Link to="/shop" class="btn karl-btn">SHOP NOW</Link>
                </div>
            </div>
            <div class="single_catagory_area d-flex align-items-center bg-img1">
                <div class="catagory-content">
                    <h6>in Bags excepting the new collection</h6>
                    <h2>Designer bags</h2>
                    <Link to="/shop" class="btn karl-btn">SHOP NOW</Link>
                </div>
            </div>
        </section>
        </div>
    )
}
