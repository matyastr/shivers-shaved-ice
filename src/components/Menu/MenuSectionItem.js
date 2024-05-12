import React from "react";

import "./MenuSectionItem.scss";

const MenuSectionItem = ({ itemDescription, itemName, itemPrice }) => {
  return (
    <li className="menu-section-item-list">
      <div className="menu-section-item-row">
        <span className="menu-section-item-name">{itemName}</span>
        {itemPrice && (
          <span className="menu-section-item-price">{itemPrice}</span>
        )}
      </div>
      {itemDescription && (
        <p className="menu-section-item-description">{itemDescription}</p>
      )}
      {!itemDescription && <br />}
    </li>
  );
};

export default MenuSectionItem;
