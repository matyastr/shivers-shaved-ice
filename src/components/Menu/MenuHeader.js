import React from 'react';

import Flavors from '../Flavors/Flavors';
import MenuNav from './MenuNav';
import PageHeader from '../PageHeader/PageHeader';
import './MenuHeader.scss';

const MenuHeader = ({ heading, introduction, sectionNames }) => {
    return (
        <>
            <PageHeader heading={heading} introduction={introduction} />
            <div className="menu-header-desktop">
                <Flavors />
            </div>
            <MenuNav sectionNames={sectionNames} />
            <div className="menu-header-mobile">
                <Flavors />
            </div>
        </>
    );
};

export default MenuHeader;
