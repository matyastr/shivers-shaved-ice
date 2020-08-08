import React from 'react';
import classnames from 'classnames';

import './MenuSectionItem.scss';

const MenuSectionItem = ({ itemDescription, itemName, itemPrice }) => (
    <li
        className={classnames({
            "menu-section-item--left-align": itemPrice || itemDescription,
        })}
    >
        <div className="menu-section-item-row">
            <span className="menu-section-item-name">
                {itemName}
            </span>
            {
                itemPrice && (
                    <span className="menu-section-item-price">
                        {itemPrice}
                    </span>
                )
            }
        </div>
        {
            itemDescription && (
                <p className="menu-section-item-description">
                    {itemDescription}
                </p>
            )
        }
    </li>
);

export default MenuSectionItem;
