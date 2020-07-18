import React from 'react';

//--- Components import --
import { HeadSection } from './HeaderComponents/headSection';
import { Fixedads } from './HeaderComponents/fixedads';

export const HeaderComponent = ({ sideBarOpen, shopSideBarOpen }) => {
    console.log("This opens side bar", sideBarOpen);
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
