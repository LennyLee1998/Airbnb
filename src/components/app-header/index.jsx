import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { HeaderWrapper } from "./style";
import HeaderLeft from "./cpns/header-left";
import HeaderCenter from "./cpns/header-center";
import HeaderRight from "./cpns/header-right";
import classNames from "classnames";
import useScrollPosition from "@/hooks/useScrollPosition";
import { shallowEqual, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

const AppHeader = memo((props) => {
  const { isFixed } = props;
  const [isSearch, setIsSearch] = useState(false);
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );
  const { topAlpha } = headerConfig;

  // 监听滚动
  const { scrollY } = useScrollPosition();
  const preY = useRef();
  if (!isSearch) preY.current = scrollY;
  if (isSearch && Math.abs(scrollY - preY.current) > 30) setIsSearch(false);

  const isAlpha = topAlpha && scrollY === 0;
  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper
        className={classNames({ fixed: isFixed })}
        isSearch={isAlpha || isSearch}
        isAlpha={isAlpha}
      >
        <div className="header-content">
          <div className="header-icon">
            <HeaderLeft />
            <HeaderRight />
          </div>
          <div className="header-search">
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              searchClick={(e) => setIsSearch(true)}
            />
          </div>
          <div className="search-area"></div>
        </div>
        {isSearch && (
          <div className="cover" onClick={(e) => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

AppHeader.propTypes = {};

export default AppHeader;
