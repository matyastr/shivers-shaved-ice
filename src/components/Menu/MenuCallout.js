import React from 'react';

import { Parallax } from 'react-scroll-parallax';

import Button from '../Button/Button';
import './MenuCallout.scss';

const MenuCallout = () => (
    <section className="menu-callout">
        <Parallax y={[-40, 20]}>
            <img src="/img/menu-callout.jpg" />
        </Parallax>

        <div className="menu-callout-button">
            <Button large to="/menu">
                View Our Menu
            </Button>
        </div>
    </section>
);

export default MenuCallout;
