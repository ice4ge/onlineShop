import React, { useRef } from 'react';

import { HeaderComponent } from '../../components/header';
import { Footer } from '../../components/footer';
import { FilterArea } from '../../components/filterArea';
import { ShopFilteredResult } from '../../components/shopFilterResult';
import { SideBar } from '../../components/sideBar';

export const ShopPage = () => {
    const mainBody = useRef();
    const sideBarOpen = () => {
        const target = mainBody.current.style;
        if (target.left == '0px') {
            target.left = '300px';
        } else {
            target.left = '0px';
        }
    }
    const style = {
        left: '0px',
    }
    return (
        <div>
            <SideBar sideBarOpen={sideBarOpen} />
            <div id="wrapper" ref={mainBody} style={style}>
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
