import React from 'react';

import { HeadSection } from './HeaderComponents/headSection';
import { Fixedads } from './HeaderComponents/fixedads';

export const HeaderComponent = () => {
    return (
        <div>
            <HeadSection />
            <Fixedads />
        </div>
    )
}
