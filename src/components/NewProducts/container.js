import React, { useState, useEffect } from 'react';

import { ProductsList } from './products';
import { shoes } from './filterData';
import { accessory } from './filterData';


export const NewProductsComponent = ({ products }) => {

    const [initialShowcase, setShowcase] = useState(products.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date)
    }));


    //... New products filter function..
    const filter = (filterKey, filterType) => {
        if (filterKey == 'all') 
        {
            setShowcase(products);
        } 
        else if (filterType == 'shoes') 
        {
            let filtered = [];
            products.map(function (item, i) {
                for (var i = 0; i < shoes.length; i++) {
                    if (item.category == shoes[i]) {
                        filtered.push(item);
                    }
                }
            })
            setShowcase(filtered);
        } 
        else if (filterType == 'accessory') 
        {
            let filtered = [];
            products.map(function (item, i) {
                for (var i = 0; i < accessory.length; i++) {
                    if (item.category == accessory[i]) {
                        filtered.push(item);
                    }
                }
            })
            setShowcase(filtered);
        }
        else if(filterType == 'gender')
        {
            setShowcase(products.filter(item => item.gender == filterKey));
        }
    }

    //... Filter latest products..
    useEffect(() => {
        setShowcase([...products.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date)
        })]);
    }, [products])

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
                        <button class="btn" onClick={() => filter('all', 'type')}>ALL</button>
                        <button class="btn" onClick={() => filter('Իգական', 'gender')}>WOMAN</button>
                        <button class="btn" onClick={() => filter('Արական', 'gender')}>MAN</button>
                        <button class="btn" onClick={() => filter('Կոշիկ', 'shoes')}>SHOES</button>
                        <button class="btn" onClick={() => filter('Աքսեսուարներ', 'accessory')}>ACCESSORIES</button>
                    </div>
                </div>

                <div class="container">
                    <div class="row karl-new-arrivals">
                        {initialShowcase.slice(0, 6).map((item, i) =>
                            <ProductsList gender={item.gender} Obj={products[i]} img={item.img} price={item.price} description={item.description} />
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}
