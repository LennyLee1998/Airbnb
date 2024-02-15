import PropTypes from "prop-types";
import React, { memo } from "react";
import { FooterWrapper } from "./style";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const SectionFooter = memo((props) => {
  const { name } = props;
  return (
    <FooterWrapper color={name ? "#00848A" : "#000"}>
      <span className="info">
        <span className="text">
          {name ? `显示更多${name}房源` : "显示全部"}
        </span>
        <IconArrowRight />
      </span>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {};

export default SectionFooter;
