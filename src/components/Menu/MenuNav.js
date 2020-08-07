import React from 'react';

import createSlug from '../../util/slug';
import './MenuNav.scss';

const MenuNav = ({ sectionNames = [] }) => {
    return (
        <section className="menu-nav">
            <div className="container">
                <span className="menu-nav-descriptor font-secondary">
                    Browse Our Menu
                </span>
                {
                    sectionNames.map(name => (
                        <a
                            className="menu-nav-link font-secondary"
                            href={`#${createSlug(name)}`}
                            key={createSlug(name)}
                        >
                            { name }
                        </a>
                    ))
                }
            </div>
        </section>
    );
};

export default MenuNav;
