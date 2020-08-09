import React from 'react';

import Button from '../Button/Button';
import './MenuCallout.scss';

const MenuCallout = () => (
    <section className="menu-callout">
        <img src="/img/menu-callout.jpg" />

        <div className="menu-callout-button">
            <Button large to="/menu">
                View Our Menu
            </Button>
        </div>
    </section>
);

export default MenuCallout;
