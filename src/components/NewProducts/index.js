import React, {useState, useEffect, useRef} from 'react';

import { ProductsList } from './products';

export const NewProductsComponent = ({ products }) => {
    const [initial, setProduct] = useState('ALL');
   

 
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
                        <button class="btn">ALL</button>
                        <button class="btn">WOMAN</button>
                        <button class="btn">MAN</button>
                        <button class="btn">SHOES</button>
                        <button class="btn">ACCESSORIES</button>
                    </div>
                </div>

                <div class="container">
                    <div class="row karl-new-arrivals" ref={productWindow} style={style}>
                        {products.map((item, i) =>
                            <ProductsList gender={item.gender} Obj={products[i]} productState={initial} img={item.img} price={item.price} description={item.description} />
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}
