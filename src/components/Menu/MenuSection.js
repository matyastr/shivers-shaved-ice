import React from "react";
import classnames from "classnames";

import createSlug from "../../util/slug";
import MenuSectionDescription from "./MenuSectionDescription";
import MenuSectionItem from "./MenuSectionItem";
import StackedContentRow from "../StackedContent/StackedContentRow";
import "./MenuSection.scss";

const MenuSection = ({
  categoryDescription,
  categoryImage,
  categoryItems = [],
  categoryTitle,
  ...props
}) => {
  const showOneLine = false;
  //   const showOneLine = categoryItems
  //     ? categoryItems.some((item = {}) => item.itemDescription || item.itemPrice)
  //     : false;

  console.log(categoryItems[0]);
  return (
    <StackedContentRow
      image={categoryImage}
      id={categoryTitle ? createSlug(categoryTitle) : "new-section"}
      {...props}
    >
      <>
        <h2 className="menu-section-title">{categoryTitle}</h2>
        {categoryDescription && (
          <MenuSectionDescription description={categoryDescription} />
        )}
        {categoryItems ? (
          <ul
            className={classnames("menu-section-items", {
              "menu-section-items--block": showOneLine,
            })}
          >
            {categoryItems.map((item) => (
              <MenuSectionItem key={item.itemName} {...item} />
            ))}
          </ul>
        ) : null}
      </>
    </StackedContentRow>
  );
};

export default MenuSection;
