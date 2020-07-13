import React from 'react';

import { HeadSection } from './HeaderComponents/headSection';
import { Fixedads } from './HeaderComponents/fixedads';

export const HeaderComponent = ({sideBarOpen}) => {
    return (
        <div>
            <HeadSection sideBarOpen={sideBarOpen}/>
            <Fixedads />
        </div>
    )
}
