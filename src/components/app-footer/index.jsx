import PropTypes from "prop-types";
import React, { memo } from "react";
import { FooterWrapper } from "./style";
import footerData from "@/assets/data/footer.json";

const AppFooter = memo((props) => {
  return (
    <FooterWrapper>
      <div className="footer-content">
        <div className="item">
          {footerData.map((item) => {
            return (
              <div className="info" key={item.name}>
                <div className="title">{item.name}</div>
                {item.list.map((text) => {
                  return (
                    <div className="text" key={text}>
                      {text}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="statement">
        © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 ·
        全国旅游投诉渠道 12301
      </div>
    </FooterWrapper>
  );
});

AppFooter.propTypes = {};

export default AppFooter;
