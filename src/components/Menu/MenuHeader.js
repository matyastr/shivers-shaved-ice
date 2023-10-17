import React from 'react';

import HeaderBanner from '../HeaderBanner/HeaderBanner';
import MenuNav from './MenuNav';
import PageHeader from '../PageHeader/PageHeader';
import './MenuHeader.scss';

const MenuHeader = ({ heading, introduction, sectionNames }) => {
    return (
        <>
            <PageHeader heading={heading} introduction={introduction} />
            <div className="menu-header-desktop">
                <HeaderBanner />
            </div>
            <MenuNav sectionNames={sectionNames} />
            <div className="menu-header-mobile">
                <HeaderBanner />
            </div>
        </>
    );
};

export default MenuHeader;
