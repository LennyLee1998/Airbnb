import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon-global";
import IconLine from "@/assets/svg/icon-line";
import IconAvatar from "@/assets/svg/icon-avatar";
import Popover from "./cpns/popover";

const HeaderRight = memo((props) => {
  const [showPanel, setShowPanel] = useState(false);
  useEffect(() => {
    function panelEvent() {
      setShowPanel(false);
    }
    window.addEventListener("click", panelEvent, true);
    return () => {
      window.removeEventListener("click", panelEvent, true);
    };
  }, []);
  function infosClickHandle() {
    setShowPanel(true);
  }
  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>
      <div className="infos" onClick={infosClickHandle}>
        <IconLine />
        <IconAvatar />
      </div>
      {showPanel && (
        <div className="panel">
          <Popover />
        </div>
      )}
    </RightWrapper>
  );
});

HeaderRight.propTypes = {};

export default HeaderRight;
