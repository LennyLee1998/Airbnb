import PropTypes from "prop-types";
import React, { memo } from "react";
import { HeaderWrapper } from "./style";
import HeaderLeft from "./cpns/header-left";
import HeaderCenter from "./cpns/header-center";
import HeaderRight from "./cpns/header-right";

const AppHeader = memo((props) => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  );
});

AppHeader.propTypes = {};

export default AppHeader;
