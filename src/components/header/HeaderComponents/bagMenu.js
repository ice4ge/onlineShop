import React from 'react';
import { FaWindowClose } from "react-icons/fa";

export const BagState = ({ bagProducts, deleteCartProduct }) => {
    return (
        <li>
            <a href="#" className="image"><img src={bagProducts.img} className="cart-thumb" alt="" /></a>
            <div className="cart-item-desc">
                <div className="bag_block">
                    <h6><a href="#">{bagProducts.category}</a></h6>
                    <p>1x - <span className="price">${bagProducts.price}</span></p>
                </div>
                <FaWindowClose onClick={() => deleteCartProduct(bagProducts.id)} className="bag_close_button"/>
            </div>
            <span className="dropdown-product-remove"><i className="icon-cross"></i></span>
        </li>
    )
}
