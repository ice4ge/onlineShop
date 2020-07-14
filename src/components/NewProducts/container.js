import React, {useState, useEffect, useRef} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ProductsList } from './products';

export const NewProductsComponent = ({ products }) => {
    const style = {
        height: '1470px'
    }
    const [initialShowcase, setShowcase] = useState(products);

    const productWindow = useRef();
    useEffect(() => {
        productWindow.current.style = style;
    },[])

    const filter = (filterKey, filterType) => {
        if(filterKey == 'all') {
            setShowcase(products);
        }else {
            setShowcase(products.filter(item => item[filterType] == filterKey));
        }
    }
 
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
                        <button class="btn" onClick={()=>filter('all', 'type')}>ALL</button>
                        <button class="btn" onClick={()=>filter('Իգական', 'gender')}>WOMAN</button>
                        <button class="btn" onClick={()=>filter('Արական', 'gender')}>MAN</button>
                        <button class="btn" onClick={()=>filter('Իգական', 'gender')}>SHOES</button>
                        <button class="btn" onClick={()=>filter('Իգական', 'gender')}>ACCESSORIES</button>
                    </div>
                </div>

                <div class="container">
                    <div class="row karl-new-arrivals" ref={productWindow} style={style}>
                        {initialShowcase.map((item, i) =>
                            <ProductsList gender={item.gender} Obj={products[i]} img={item.img} price={item.price} description={item.description} />
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}
