import React from 'react';

import { HeaderComponent } from '../../components/header';
import { Footer } from '../../components/footer';
import { FilterArea } from '../../components/filterArea';
import { ShopFilteredResult } from '../../components/shopFilterResult';
import { SideBar } from '../../components/sideBar';

export const ShopPage = () => {
    const style = {
        left: '0px'
    }
    return (
        <div>
            <SideBar />
            <div id="wrapper" style={style}>
                <HeaderComponent />
                <section className="shop_grid_area section_padding_100">
                    <div className="container">
                        <div className="row">
                            <FilterArea />
                            <ShopFilteredResult />
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    )
}
