import React from 'react';

export const CartProducts = ({ productList }) => {
    console.log('cart', productList);
    return (

        <tr>
            <td className="cart_product_img d-flex align-items-center">
                <a href="#"><img src={productList.img} alt="Product" /></a>
                <h6>{productList.name}</h6>
            </td>
            <td className="price"><span>${productList.price}</span></td>
            <td className="qty">
                <div className="quantity">
                    <span className="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i className="fa fa-minus" aria-hidden="true"></i></span>
                    <input type="number" className="qty-text" id="qty" step="1" min="1" max="99" name="quantity" value="1" />
                    <span className="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i className="fa fa-plus" aria-hidden="true"></i></span>
                </div>
            </td>
            <td className="total_price"><span>${productList.price}</span></td>
        </tr>
    )
}
