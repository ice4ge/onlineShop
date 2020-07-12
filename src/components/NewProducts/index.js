import React from 'react';

export const NewProductsComponent = () => {
    return (
        <div>
            <section class="new_arrivals_area section_padding_100_0 clearfix">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section_heading text-center">
                            <h2>New Arrivals</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="karl-projects-menu mb-100">
                <div class="text-center portfolio-menu">
                    <button class="btn active" data-filter="*">ALL</button>
                    <button class="btn" data-filter=".women">WOMAN</button>
                    <button class="btn" data-filter=".man">MAN</button>
                    <button class="btn" data-filter=".shoes">SHOES</button>
                    <button class="btn" data-filter=".access">ACCESSORIES</button>
                </div>
            </div>

            <div class="container">
                <div class="row karl-new-arrivals">

                    <div class="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.2s">

                        <div class="product-img">
                            <img src="img/product-img/product-1.jpg" alt=""/>
                            <div class="product-quicview">
                                <a href="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></a>
                            </div>
                        </div>
  
                        <div class="product-description">
                            <h4 class="product-price">$39.90</h4>
                            <p>Jeans midi cocktail dress</p>

                            <a href="#" class="add-to-cart-btn">ADD TO CART</a>
                        </div>
                    </div>


                    <div class="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.3s">

                        <div class="product-img">
                            <img src="img/product-img/product-2.jpg" alt=""/>
                            <div class="product-quicview">
                                <a href="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></a>
                            </div>
                        </div>

                        <div class="product-description">
                            <h4 class="product-price">$39.90</h4>
                            <p>Jeans midi cocktail dress</p>

                            <a href="#" class="add-to-cart-btn">ADD TO CART</a>
                        </div>
                    </div>

                    <div class="col-12 col-sm-6 col-md-4 single_gallery_item access wow fadeInUpBig" data-wow-delay="0.4s">

                        <div class="product-img">
                            <img src="img/product-img/product-3.jpg" alt=""/>
                            <div class="product-quicview">
                                <a href="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></a>
                            </div>
                        </div>

                        <div class="product-description">
                            <h4 class="product-price">$39.90</h4>
                            <p>Jeans midi cocktail dress</p>

                            <a href="#" class="add-to-cart-btn">ADD TO CART</a>
                        </div>
                    </div>


                    <div class="col-12 col-sm-6 col-md-4 single_gallery_item shoes wow fadeInUpBig" data-wow-delay="0.5s">

                        <div class="product-img">
                            <img src="img/product-img/product-4.jpg" alt=""/>
                            <div class="product-quicview">
                                <a href="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></a>
                            </div>
                        </div>

                        <div class="product-description">
                            <h4 class="product-price">$39.90</h4>
                            <p>Jeans midi cocktail dress</p>

                            <a href="#" class="add-to-cart-btn">ADD TO CART</a>
                        </div>
                    </div>


                    <div class="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.6s">

                        <div class="product-img">
                            <img src="img/product-img/product-5.jpg" alt=""/>
                            <div class="product-quicview">
                                <a href="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></a>
                            </div>
                        </div>

                        <div class="product-description">
                            <h4 class="product-price">$39.90</h4>
                            <p>Jeans midi cocktail dress</p>

                            <a href="#" class="add-to-cart-btn">ADD TO CART</a>
                        </div>
                    </div>


                    <div class="col-12 col-sm-6 col-md-4 single_gallery_item kids man wow fadeInUpBig" data-wow-delay="0.7s">
      
                        <div class="product-img">
                            <img src="img/product-img/product-6.jpg" alt=""/>
                            <div class="product-quicview">
                                <a href="#" data-toggle="modal" data-target="#quickview"><i class="ti-plus"></i></a>
                            </div>
                        </div>

                        <div class="product-description">
                            <h4 class="product-price">$39.90</h4>
                            <p>Jeans midi cocktail dress</p>
                            <a href="#" class="add-to-cart-btn">ADD TO CART</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
