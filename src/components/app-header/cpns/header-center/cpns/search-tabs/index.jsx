import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";
import searchData from "@/assets/data/search_titles.json";
import SearchSections from "../search-sections";

const SearchTabs = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  function tabClickHandle(index) {
    setCurrentIndex(index);
  }
  return (
    <TabsWrapper>
      <div className="tabs">
        {searchData.map((item, index) => {
          return (
            <div
              className="tab"
              onClick={(e) => tabClickHandle(index)}
              key={item.title}
            >
              <span className="tab-text">{item.title}</span>
              {currentIndex === index && <div className="bottom"></div>}
            </div>
          );
        })}
      </div>
      <SearchSections itemData={searchData[currentIndex]} />
    </TabsWrapper>
  );
});

SearchTabs.propTypes = {};

export default SearchTabs;
