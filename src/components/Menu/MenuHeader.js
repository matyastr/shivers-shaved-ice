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
                    {
                        introduction && (
                            <p className="menu-header-intro">
                                <ReactMarkdown source={introduction} />
                            </p>
                        )
                    }
                </div>
            </section>

            <MenuNav sectionNames={sectionNames} />
        </>
    );
};

export default MenuHeader;
