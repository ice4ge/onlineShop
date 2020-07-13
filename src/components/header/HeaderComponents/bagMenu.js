import React from 'react';
import { Link } from "react-router-dom";

export const BagState = ({bagProducts}) => {
    return (
            <li>
                <a href="#" className="image"><img src={bagProducts.img} className="cart-thumb" alt="" /></a>
                <div className="cart-item-desc">
                    <h6><a href="#">{bagProducts.category}</a></h6>
                    <p>1x - <span className="price">${bagProducts.price}</span></p>
                </div>
                <span className="dropdown-product-remove"><i className="icon-cross"></i></span>
            </li>
    )
}
