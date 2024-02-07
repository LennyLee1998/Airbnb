import PropTypes from "prop-types";
import React, { memo } from "react";
import { LeftWrapper } from "./style";
import IconLogo from "@/assets/svg/icon-logo";

const HeaderLeft = memo((props) => {
  return (
    <LeftWrapper>
      <div className="logo-icon">
        <IconLogo />
      </div>
    </LeftWrapper>
  );
});

HeaderLeft.propTypes = {};

export default HeaderLeft;
