import React from 'react';

import PageHeader from '../PageHeader/PageHeader';
import './MenuHeader.scss';

const MenuHeader = ({ heading, introduction }) => {
    return (
        <>
            <PageHeader heading={heading} introduction={introduction} />
        </>
    );
};

export default MenuHeader;
