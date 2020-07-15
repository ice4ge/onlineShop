import React, { useEffect, useState } from 'react';

import { HeaderComponent } from '../../components/header';
import { Footer } from '../../components/footer';
import { FilterArea } from '../../components/filterArea';
import { ShopFilteredResult } from '../../components/shopFilterResult/mainWindow';
import { SideBar } from '../../components/sideBar';
import { PreviewModal } from '../../components/previewModal';
import firebase from '../../components/firebase';
import { useSelector, useDispatch } from 'react-redux';
import{ GET_FILTER } from '../../store/actions/actionNames';


export const ShopPage = () => {
    const style = {
        left: '0px'
    }
    const products = useSelector(state => state.ProductsService);
    const PreviewState = useSelector(state => state.ProductPreview);
    const [showCase, setShowcase] = useState(products);
    const store = firebase.firestore();
    const dispatch = useDispatch();
    const filter = (filterKey, filterType) => {
        if (filterKey == 'price') {
            setShowcase(products.filter(item => item[filterKey] <= filterType));
        } else if (filterKey == 'brand') {
        
            const dataRef = store.collection("AllShops").doc(filterType).collection('products');
            let realData = [];
            dataRef.get()
                .then(Response => {
                    Response.forEach(document => {
                        const itemObject = document.data();
                        const productItems = {
                            name: itemObject.productName,
                            img: itemObject.images,
                            price: itemObject.productPrice,
                            description: itemObject.description,
                            gender: itemObject.gender,
                            brand: 'Puma',
                            category: itemObject.category,
                            size: itemObject.productSize,
                            color: itemObject.color,
                            ar: itemObject.ar,
                            sale: itemObject.sale,
                            type: itemObject.type,
                            date: itemObject.date
                        };
                        realData.push(productItems);
                        console.log("click brand filer", realData);
                    });
                    dispatch({ type: GET_FILTER, payLoad: realData });
                })
                setShowcase(products);
        } else {
            setShowcase(products.filter(item => item[filterKey] == filterType));
        }
    }
    useEffect(()=> {
        setShowcase(products)
    },[products])
    console.log('products', showCase)


    return (
        <div>
            <SideBar />
            <div id="wrapper" style={style}>
                <HeaderComponent />
                <section className="shop_grid_area section_padding_100">
                    <div className="container">
                        <div className="row">
                            <FilterArea filter={filter} />
                            <ShopFilteredResult products={showCase} />
                        </div>
                    </div>
                </section>
                <PreviewModal PreviewState={PreviewState} />
                <Footer />
            </div>
        </div>
    )
}
