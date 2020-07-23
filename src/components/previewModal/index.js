import React, {useRef} from 'react';
import { CART_ADD } from '../../store/actions/actionNames';
import { useDispatch } from 'react-redux';
import { Carousel } from 'react-bootstrap';


export const PreviewModal = ({ PreviewState }) => {
    const dispatch = useDispatch();
    const size = useRef();

    //... Add to cart function ..
    const cartAdd = () => {
        PreviewState = {...PreviewState, size: size.current.value};
        dispatch({ type: CART_ADD, payLoad: PreviewState });
    }
    return (
        <div className="modal fade" id="quickview" tabindex="-1" role="dialog" aria-labelledby="quickview" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                    <button type="button" className="close btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>

                    <div className="modal-body">
                        <div className="quickview_body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-5">
                                        <div className="quickview_pro_img">
                                            <Carousel pause={true}>
                                                {PreviewState.img && PreviewState.img.map((item, i) =>
                                                    <Carousel.Item key={i}>
                                                        <img className="carouse_images" src={item} alt="" />
                                                    </Carousel.Item>
                                                )}
                                            </Carousel>
                                            <p>DESCRIPTION:  <span>{PreviewState.description}</span></p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-7">
                                        <div className="quickview_pro_des">
                                            <h4 className="title">{PreviewState.Brand}</h4>
                                            <div className="top_seller_product_rating mb-15">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </div>
                                            <h5 className="price">${PreviewState.price}</h5>
                                            <p>{PreviewState.text}</p>
                                            <div className="modal_ads">
                                                <h5>NAME:  <p>{PreviewState.name}</p></h5>
                                                <h5>
                                                    SIZE:
                                                    <select className="size_select" ref={size}>
                                                        <option value="">Please chose the size</option>
                                                        {PreviewState.size && PreviewState.size.map((n, i) =>
                                                            <option>{n}</option>
                                                        )}
                                                    </select>
                                                </h5>

                                            </div>
                                        </div>
                                        <form className="cart" method="post">
                                            <div className="quantity">
                                                <span className="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i className="fa fa-minus" aria-hidden="true"></i></span>

                                                <input type="number" className="qty-text" id="qty" step="1" min="1" max="12" name="quantity" value="1" />

                                                <span className="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i className="fa fa-plus" aria-hidden="true"></i></span>
                                            </div>
                                            <p onClick={() => cartAdd()} className="cart-submit">Add to cart</p>
                                            <div className="modal_pro_wishlist">
                                                <a href="wishlist.html" target="_blank"><i className="ti-heart"></i></a>
                                            </div>
                                            <div className="modal_pro_compare">
                                                <a href="compare.html" target="_blank"><i className="ti-stats-up"></i></a>
                                            </div>
                                        </form>

                                        <div className="share_wf mt-30">
                                            <p>Share With Friend</p>
                                            <div className="_icon">
                                                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                                <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                                <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
