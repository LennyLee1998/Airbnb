import PropTypes from "prop-types";
import React, { memo } from "react";
import { PopoverWrapper } from "./style";

const Popover = memo((props) => {
  return (
    <PopoverWrapper>
      <div className="top">
        <span className="btn">注册</span>
        <span className="btn">登录</span>
      </div>
      <div className="bottom">
        <div className="info">出租房源</div>
        <div className="info">开展体验</div>
        <div className="info">帮助</div>
      </div>
    </PopoverWrapper>
  );
});

Popover.propTypes = {};

export default Popover;
