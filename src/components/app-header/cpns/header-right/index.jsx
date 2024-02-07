import PropTypes from "prop-types";
import React, { memo } from "react";
import { RightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon-global";
import IconLine from "@/assets/svg/icon-line";
import IconAvatar from "@/assets/svg/icon-avatar";

const HeaderRight = memo((props) => {
  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>
      <div className="infos">
        <IconLine/>
        <IconAvatar/>
      </div>
    </RightWrapper>
  );
});

HeaderRight.propTypes = {};

export default HeaderRight;
