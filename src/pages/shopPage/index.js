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
import Loader from 'react-loader-spinner';


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
    const [sizeKey, setSizeKey] = useState([])
    const [brand, setBrand] = useState('')
    const dispatch = useDispatch();

    const setSizeProps = (sizes) => {
        setSizeKey(sizes);
    }

    const filterArray = (filterKey, filterType) => {
        if (filterKey == 'price') {
            setShowcase(virtualSets.filter(item => item[filterKey] <= filterType));
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
        for (var i = 0; i < range[1].subProperty.length; i++) {
            if (range[1].subProperty[i].select === true) {
                filterResult = filterResult.filter(item => item.brand == range[1].subProperty[i].filter);
            }
        }
        for (var i = 0; i < range[0].subProperty.length; i++) {
            if (range[0].subProperty[i].select === true) {
                filterResult = filterResult.filter(item => item.gender == range[0].subProperty[i].filter);
            }
        }
        for (var i = 0; i < range[2].subProperty.length; i++) {
            if (range[2].subProperty[i].select === true) {
                filterResult = filterResult.filter(item => item.category == range[2].subProperty[i].filter);
            }
        }

        for (var i = 0; i < type.length; i++) {
            if (type[i].select === true) {
                filterResult = filterResult.filter(item => item.type == type[i].type);
            }
        }
        setShowcase(filterResult);
        setVirtualSets(filterResult);
    }

    const [load, setLoad] = useState(true);
    useEffect(() => {
        setTimeout(function () {
            setLoad(false)
        }, 6000)
    }, [])
    return (
        <div>
            <SideBar />
            <div id="wrapper" style={style}>
                <HeaderComponent />
                <section className="shop_grid_area section_padding_100">
                    <div className="container">
                        <div className="row">
                            <FilterArea setSizeProps={setSizeProps} filterProducts={filterProducts} size={size} filter={filterArray} />

                            <div className="col-12 col-md-8 col-lg-9">
                                {load ?
                                    <Loader
                                    className="contain"
                                        type="Puff"
                                        color="#00BFFF"
                                        height={100}
                                        width={100}
                                        timeout={3000} //3 secs
                                    /> :

                                    <ShopFilteredResult products={showCase} />
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <PreviewModal PreviewState={PreviewState} />
                <Footer />
            </div>
        </div>
    )
}
