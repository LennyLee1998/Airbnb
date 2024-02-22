import PropTypes from "prop-types";
import React, { memo } from "react";
import { CSSTransition } from "react-transition-group";

import { CenterWrapper } from "./style";
import IconSearch from "@/assets/svg/icon-search";
import SearchTabs from "./cpns/search-tabs";

const HeaderCenter = memo((props) => {
  const { isSearch, searchClick } = props;
  const SearchIconEl = (
    <div className="search" onClick={searchClick}>
      <div className="text">搜索房源和体验</div>
      <div className="icon-search">
        <IconSearch />
      </div>
    </div>
  );
  return (
    <CenterWrapper>
      {isSearch ? (
        <CSSTransition
          in={isSearch}
          classNames="detail"
          timeout={250}
          unmountOnExit={true}
        >
          <SearchTabs />
        </CSSTransition>
      ) : (
        <CSSTransition
          in={!isSearch}
          classNames="bar"
          timeout={250}
          unmountOnExit={true}
        >
          {SearchIconEl}
        </CSSTransition>
      )}
    </CenterWrapper>
  );
});

HeaderCenter.propTypes = {};

export default HeaderCenter;
