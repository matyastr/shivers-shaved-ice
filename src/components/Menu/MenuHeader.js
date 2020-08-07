import React from 'react';

import MenuNav from './MenuNav';
import './MenuHeader.scss';

const MenuHeader = ({ heading, introduction, sectionNames }) => {
    return (
        <>
            <section className="menu-header">
                <div className="container">
                    <h1>{heading}</h1>
                </div>
            </section>

            <MenuNav sectionNames={sectionNames} />
            {
                introduction && (
                    <p className="container menu-header-intro">{introduction}</p>
                )
            }
        </>
    );
};

export default MenuHeader;
