import React from 'react';

import './MenuSectionItem.scss';

const MenuSectionItem = ({ itemName }) => (
    <li>
        <span className="menu-section-item-name">
            {itemName}
        </span>
    </li>
);

export default MenuSectionItem;
