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
    const [gender, setGender] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
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
            setGender(filterType);
        } 
        else if (filterKey == 'category') 
        {
            setCategory(filterType);
        } 
        else if (filterKey == 'type') 
        {
            setType(filterType);
        } 
        else if(filterKey == 'price') {
            setShowcase(virtualSets.filter(item => item.price == filterType));
        }
    }
    
    useEffect(() => {
        setShowcase(products);
        setVirtualSets(products);
    }, [products])
    
    useEffect(() => {
        setSize(sizeChart(gender, category, type));
    }, [gender, category, type]);  


    const filterProducts = (range, type) => {
        console.log(range, type)

        let filterResult = products;
        for(var i = 0; i < range[0].subProperty.length; i++) {
            if(range[0].subProperty[i].select == true) {
                filterResult = filterResult.filter(item => item.gender == range[0].subProperty[i].filter);
            }
        }
        for(var i = 0; i < range[2].subProperty.length; i++) {
            if(range[2].subProperty[i].select == true) {
                filterResult = filterResult.filter(item => item.category == range[2].subProperty[i].filter);
            }
        }

        for(var i = 0; i < type.length; i++) {
            if(type[i].select == true) {
                filterResult = filterResult.filter(item => item.type == type[i].type);
            }
        }
        setShowcase(filterResult); 
        setVirtualSets(filterResult); 
    }
    return (
        <div>
            <SideBar />
            <div id="wrapper" style={style}>
                <HeaderComponent />
                <section className="shop_grid_area section_padding_100">
                    <div className="container">
                        <div className="row">
                            <FilterArea filterProducts={filterProducts} size={size} filter={filterArray} />
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
