import React from 'react';

import { MainFooterField } from './footerComponents/mainField';
import { FooterBottomIcons } from './footerComponents/bottomIcons';

export const Footer = () => {
    return (
        <footer class="footer_area">
            <div class="container">
                <MainFooterField />
                <FooterBottomIcons />
            </div>
        </footer>
    )
}
