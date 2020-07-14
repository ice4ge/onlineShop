import React, {useEffect, useState} from 'react';


import { HeaderComponent } from '../../components/header';
import { Footer } from '../../components/footer';
import { FilterArea } from '../../components/filterArea';
import { ShopFilteredResult } from '../../components/shopFilterResult/mainWindow';
import { SideBar } from '../../components/sideBar';
import { PreviewModal } from '../../components/previewModal';

import { useSelector, useDispatch } from 'react-redux';


export const ShopPage = () => {
    const style = {
        left: '0px'
    }
    const products = useSelector(state => state.ProductsService);
    const PreviewState = useSelector(state => state.ProductPreview);
    const [showCase, setShowcase] = useState(products);

    const filter = (filterKey, filterType) => {
            setShowcase(products.filter(item => item[filterKey] == filterType));
    }
    console.log("shop filter====..", showCase);


    return (
        <div>
            <SideBar />
            <div id="wrapper" style={style}>
                <HeaderComponent />
                <section className="shop_grid_area section_padding_100">
                    <div className="container">
                        <div className="row">
                            <FilterArea filter={filter} />
                            <ShopFilteredResult products={showCase}/>
                        </div>
                    </div>
                </section>
                <PreviewModal PreviewState={PreviewState} />
                <Footer />
            </div>
        </div>
    )
}
