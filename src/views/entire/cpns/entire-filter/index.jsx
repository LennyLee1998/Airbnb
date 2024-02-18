import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";

const EntireFilter = memo((props) => {
  const [selectedItem, setSelectedItem] = useState([]);
  function filterClickHandle(item) {
    let newItems = [...selectedItem];
    if (newItems.includes(item)) {
      newItems = newItems.filter(
        (el) => el !== item
      );
    } else {
      newItems.push(item);
    }
    setSelectedItem(newItems);
  }

  return (
    <FilterWrapper>
      <div className="filter-list">
        {filterData.map((item) => {
          return (
            <div
              className={classNames("filter-item", {
                active: selectedItem.includes(item),
              })}
              key={item}
              onClick={(e) => {
                filterClickHandle(item);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

EntireFilter.propTypes = {};

export default EntireFilter;
