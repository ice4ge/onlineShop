import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GET_FILTER } from '../../store/actions/actionNames';
import { sizeChart } from './size';

//--- Components import --
import { HeaderComponent } from '../../components/header';
import { Footer } from '../../components/footer';
import { FilterArea } from '../../components/filterArea';
import { ShopFilteredResult } from '../../components/shopFilterResult/mainWindow';
import { SideBar } from '../../components/sideBar';
import { PreviewModal } from '../../components/previewModal';
import firebase from '../../components/firebase';


export const ShopPage = () => {
    const style = {
        left: '0px'
    }
    const products = useSelector(state => state.ProductsService);
    const PreviewState = useSelector(state => state.ProductPreview);

    const [showCase, setShowcase] = useState(products);
    const [virtualSets, setVirtualSets] = useState(products);
    const [gender, setGender] = useState();
    const [category, setCategory] = useState();
    const [type, setType] = useState();
    const [size, setSize] = useState([]);
    const dispatch = useDispatch();

    const store = firebase.firestore();
    const filterArray = (filterKey, filterType) => {
        if (filterKey == 'price') 
        {
            setShowcase(virtualSets.filter(item => item[filterKey] <= filterType));
        } 
        else if (filterKey == 'brand') 
        {
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
                            brand: filterType,
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
            setVirtualSets(products);
        }
        else if (filterKey == 'gender') 
        {
            setShowcase(products.filter(item => item.gender == filterType));
            setVirtualSets(products.filter(item => item.gender == filterType));
            setGender(filterType);
        } 
        else if (filterKey == 'category') 
        {
            setShowcase(products.filter(item => item.category == filterType))
            setVirtualSets(products.filter(item => item.category == filterType));
            setCategory(filterType);
        } 
        else if (filterKey == 'type') 
        {
            setShowcase(products.filter(item => item.type == filterType))
            setVirtualSets(products.filter(item => item.type == filterType));
            setType(filterType);
        } 
        else if (filterKey == 'size') 
        {
            let result = [];
            virtualSets.map(function (item, i) {
                let flag = 0;
                for (var i = 0; i < item.size.length; i++) {
                    if (item.size[i] == filterType) {
                        flag++;
                    }
                }
                if (flag > 0) {
                    result.push(item);
                    flag = 0;
                }
            })
            console.log(filterType);
            setShowcase(result);
        }
    }
    
    useEffect(() => {
        setShowcase(products)
    }, [products])
    
    useEffect(() => {
        setSize(sizeChart(gender, category, type))
    }, [gender, category, type])
    
    return (
        <div>
            <SideBar />
            <div id="wrapper" style={style}>
                <HeaderComponent />
                <section className="shop_grid_area section_padding_100">
                    <div className="container">
                        <div className="row">
                            <FilterArea size={size} filter={filterArray} />
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
