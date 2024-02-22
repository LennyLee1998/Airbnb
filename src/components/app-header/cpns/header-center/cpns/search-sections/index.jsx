import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionsWrapper } from "./style";

const SearchSections = memo((props) => {
  const { itemData } = props;
  console.log(itemData);
  return (
    <SectionsWrapper>
      <div className="search-section">
        {itemData?.searchInfos?.map((item) => {
          return (
            <div className="section-item" key={item.title}>
              <div className="info">
                <div className="title">{item.title}</div>
                <div className="desc">{item.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionsWrapper>
  );
});

SearchSections.propTypes = {};

export default SearchSections;
