import PropTypes from "prop-types";
import React, { memo } from "react";
import { LeftWrapper } from "./style";
import IconLogo from "@/assets/svg/icon-logo";
import { useNavigate } from "react-router-dom";

const HeaderLeft = memo((props) => {
  const navigate = useNavigate()
  function iconClickHandle() {
    navigate("/home")
  }
  return (
    <LeftWrapper>
      <div className="logo-icon" onClick={iconClickHandle}>
        <IconLogo />
      </div>
    </LeftWrapper>
  );
});

HeaderLeft.propTypes = {};

export default HeaderLeft;
