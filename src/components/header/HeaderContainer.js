import React from 'react';

//--- Components import --
import { HeadSection } from './HeaderComponents/headSection';
import { Fixedads } from './HeaderComponents/fixedads';

export const HeaderComponent = ({ sideBarOpen, shopSideBarOpen }) => {
    return (
        <div>
            <HeadSection
                sideBarOpen={sideBarOpen}
                shopSideBarOpen={shopSideBarOpen}
            />
            <Fixedads />
        </div>
    )
}
