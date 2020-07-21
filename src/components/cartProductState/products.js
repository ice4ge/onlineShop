import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CART_PRODUCT_DELETE } from '../../store/actions/actionNames';
import { ProductsList } from '../NewProducts/products';

export const CartProducts = ({ productList }) => {
    const [productPrice, setPrice] = useState();
    const [productNumber, setNumber] = useState();
    useEffect(() => {
        setPrice(productList.price);
        setNumber(1);
    },[productList])

    const setProductPrice = (setKey) => {
        if(setKey === 'minus') 
        {
            setPrice(productPrice - productList.price);
            setNumber(productNumber - 1);
        }
        else 
        {
            setPrice(productPrice + productList.price);
            setNumber(productNumber + 1);
        }
    }
    const dispatch = useDispatch();
    useEffect(() => {
        if(productNumber === 0) {
            dispatch({type: CART_PRODUCT_DELETE, payLoad: productList.id})
        }
    }, [productNumber]);
    return (

        <tr>
            <td className="cart_product_img d-flex align-items-center">
                <a href="#"><img className="cart_product_image" src={productList.img} alt="Product" /></a>
                <h6>{productList.name}</h6>
            </td>
            <td className="price"><span>${productList.price}</span></td>
            <td className="qty">
                <div className="quantity">
                    <span className="qty-minus" onClick={()=>setProductPrice('minus')}><i className="fa fa-minus" aria-hidden="true"></i></span>
                    <input type="number" value={productNumber} className="qty-text" step="1" min="0" max="99" name="quantity" />
                    <span className="qty-plus" onClick={()=>setProductPrice('plus')}><i className="fa fa-plus" aria-hidden="true"></i></span>
                </div>
            </td>
            <td className="total_price"><span>${productPrice}</span></td>
        </tr>
    )
}
