import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GET_FILTER, TOTAL_PRODUCTS } from '../../store/actions/actionNames';
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

    console.log('products', products);

    const [showCase, setShowcase] = useState(products);
    const [virtualSets, setVirtualSets] = useState(products);
    const [gender, setGender] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [size, setSize] = useState([]);
    const [sizeKey, setSizeKey] = useState([])
    const [brand, setBrand] = useState('')
    const dispatch = useDispatch();

    const setSizeProps = (sizes) => {
        setSizeKey(sizes);
    }

    const store = firebase.firestore();
    const filterArray = (filterKey, filterType) => {
        if (filterKey == 'price') {
            setShowcase(virtualSets.filter(item => item[filterKey] <= filterType));
        }
        else if (filterKey == 'brand') {
            // const brandProducts = filterType[1].subProperty;
            // console.log(brandProducts);
            // let dispatchFlag = 0;
            // for (var k = 0; k < brandProducts.length; k++) {
            //     if (brandProducts[k].select) {
            //         const dataRef = store.collection("AllShops").doc(brandProducts[k].target).collection('products');
            //         dataRef.get()
            //             .then(Response => {
            //                 let allProducts = []
            //                 Response.forEach(document => {
            //                     const itemObject = document.data();
            //                     const productItems = {
            //                         name: itemObject.productName,
            //                         img: itemObject.images,
            //                         price: Math.round(itemObject.productPrice - (itemObject.productPrice / 100) * itemObject.sale),
            //                         description: itemObject.description,
            //                         gender: itemObject.gender,
            //                         brand: brandProducts[k].text,
            //                         category: itemObject.category,
            //                         size: itemObject.productSize,
            //                         color: itemObject.color,
            //                         ar: itemObject.ar,
            //                         sale: itemObject.sale,
            //                         type: itemObject.type,
            //                         date: itemObject.date
            //                     };
            //                     allProducts.push(productItems);

            //                 })
            //                 console.log('brand filtered', allProducts);
            //             })
            //     }

            // }
        }
        else if (filterKey == 'gender') {
            setGender(filterType);
        }
        else if (filterKey == 'category') {
            setCategory(filterType);
        }
        else if (filterKey == 'type') {
            setType(filterType);
        }
        else if (filterKey == 'price') {
            setShowcase(virtualSets.filter(item => item.price == filterType));
        }
        else if (filterKey == 'size') {
            let result = [];
            let saveFlag = 0;
            for (var i = 0; i < filterType.length; i++) {
                if (filterType[i].select == true) {
                    saveFlag++;
                    virtualSets.map(function (item) {
                        for (var k = 0; k < item.size.length; k++) {
                            if (item.size[k] == filterType[i].size) {
                                result.push(item);
                            }
                        }
                    })
                }
            }
            setShowcase(result);
            if (saveFlag == 0) {
                setShowcase(virtualSets);
            }
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

        let filterResult = products;
        for (var i = 0; i < range[0].subProperty.length; i++) {
            if (range[0].subProperty[i].select == true) {
                filterResult = filterResult.filter(item => item.gender == range[0].subProperty[i].filter);
            }
        }
        for (var i = 0; i < range[2].subProperty.length; i++) {
            if (range[2].subProperty[i].select == true) {
                filterResult = filterResult.filter(item => item.category == range[2].subProperty[i].filter);
            }
        }

        for (var i = 0; i < type.length; i++) {
            if (type[i].select == true) {
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
                            <FilterArea setSizeProps={setSizeProps} filterProducts={filterProducts} size={size} filter={filterArray} />
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
