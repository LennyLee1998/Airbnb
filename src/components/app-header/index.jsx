import PropTypes from "prop-types";
import React, { memo } from "react";
import { HeaderWrapper } from "./style";
import HeaderLeft from "./cpns/header-left";
import HeaderCenter from "./cpns/header-center";
import HeaderRight from "./cpns/header-right";
import classNames from "classnames";

const AppHeader = memo((props) => {
  const { isFixed } = props;
  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <div className="header-content">
        <div className="header-icon">
          <HeaderLeft />
          <HeaderRight />
        </div>
        <div className="header-search">
          <HeaderCenter />
        </div>
      </div>
    </HeaderWrapper>
  );
});

AppHeader.propTypes = {};

export default AppHeader;
