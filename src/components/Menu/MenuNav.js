import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import classnames from 'classnames';

import createSlug from '../../util/slug';
import './MenuNav.scss';

const MenuNav = ({ sectionNames = [] }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <section
            className={classnames("menu-nav", {
                "menu-nav--expanded": isExpanded,
            })}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="container">
                <span className="menu-nav-descriptor font-secondary">
                    Browse Our Menu
                </span>
                {
                    sectionNames.map(name => (
                        <AnchorLink
                            className="menu-nav-link font-secondary"
                            href={`#${createSlug(name)}`}
                            key={createSlug(name)}
                        >
                            { name }
                        </AnchorLink>
                    ))
                }
            </div>
        </section>
    );
};

export default MenuNav;
