import PropTypes from "prop-types";
import React, { memo } from "react";
import { FooterWrapper } from "./style";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import { useNavigate } from "react-router-dom";

const SectionFooter = memo((props) => {
  const { name } = props;
  const navigate = useNavigate()
  function moreClickHandle() {
    navigate("/entire")
  }
  return (
    <FooterWrapper color={name ? "#00848A" : "#000"}>
      <div className="info"onClick={moreClickHandle}>
        <span className="text">
          {name ? `显示更多${name}房源` : "显示全部"}
        </span>
        <IconArrowRight />
      </div>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {};

export default SectionFooter;
