import React from 'react';
import ReactMarkdown from 'react-markdown';

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
                    <p className="container menu-header-intro">
                        <ReactMarkdown source={introduction} />
                    </p>
                )
            }
        </>
    );
};

export default MenuHeader;
