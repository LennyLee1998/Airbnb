import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { BrowserWrapper } from "./style";
import IconClose from "@/assets/svg/icon-close";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconTriangleArrowBottom from "@/assets/svg/icon-triangle-arrow-bottom";
import IconTriangleArrowTop from "@/assets/svg/icon-triangle-arrow-top";
import Indicator from "../indicator";
import classNames from "classnames";

const PictureBrowser = memo((props) => {
  const { pictureUrls = [], setShowBrowser } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [showList, setShowList] = useState(true);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });
  function closeBtnClickHandle() {
    if (setShowBrowser) setShowBrowser(false);
  }
  function arrowBtnClickHandle(isNext = true) {
    let pictureIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    if (pictureIndex < 0) pictureIndex = pictureUrls.length - 1;
    if (pictureIndex > pictureUrls.length - 1) pictureIndex = 0;
    setCurrentIndex(pictureIndex);
    setIsNext(isNext);
  }
  function bottomItemClickHandle(index) {
    setIsNext(index > currentIndex);
    setCurrentIndex(index);
  }
  return (
    <BrowserWrapper isNext={isNext} showList={showList}>
      <div className="top">
        <div className="close" onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={(e) => arrowBtnClickHandle(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={(e) => arrowBtnClickHandle(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={200}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{pictureUrls.length}:room
              </span>
              <span> apartment图片{currentIndex + 1}</span>
            </div>
            <div
              className="toggle"
              onClick={(e) => {
                setShowList(!showList);
              }}
            >
              <span>{showList ? "隐藏" : "显示"}照片列表</span>
              {showList ? (
                <IconTriangleArrowBottom />
              ) : (
                <IconTriangleArrowTop />
              )}
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {pictureUrls.map((url, index) => {
                return (
                  <div
                    className={classNames("item", {
                      active: currentIndex === index,
                    })}
                    key={url}
                    onClick={(e) => bottomItemClickHandle(index)}
                  >
                    <img src={url} alt="" />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
};

export default PictureBrowser;
