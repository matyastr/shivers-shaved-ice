import React from 'react';

import MenuNav from './MenuNav';
import PageHeader from '../PageHeader/PageHeader';

const MenuHeader = ({ heading, introduction, sectionNames }) => {
    return (
        <>
            <PageHeader heading={heading} introduction={introduction} />
            <MenuNav sectionNames={sectionNames} />
        </>
    );
};

export default MenuHeader;
