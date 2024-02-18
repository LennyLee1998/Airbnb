import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { ViewWrapper } from "./style";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";

const ScrollView = memo((props) => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  const totalDistanceRef = useRef();

  const scrollContentRef = useRef();
  // console.log(props.children);
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; //整个的宽度
    const clientWidth = scrollContentRef.current.clientWidth; //overflow下的宽度
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
    setShowRight(totalDistance > 0);
  }, [props.children]);

  //
  function btnClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const newEl = scrollContentRef.current.children[newIndex];
    const newOffsetLeft = newEl.offsetLeft;
    // 两个都为负数是因为translate的值是相对于元素原来的位置进行偏移的
    scrollContentRef.current.style.transform = `translateX(-${newOffsetLeft}px)`;
    setPosIndex(newIndex);
    setShowRight(totalDistanceRef.current > newOffsetLeft);
    setShowLeft(newOffsetLeft > 0);
  }
  // function rightClickHandle() {
  //   const newIndex = posIndex + 1;
  //   const newEl = scrollContentRef.current.children[newIndex];
  //   const newOffsetLeft = newEl.offsetLeft;
  //   console.log(newOffsetLeft);
  //   // 两个都为负数是因为translate的值是相对于元素原来的位置进行偏移的
  //   scrollContentRef.current.style.transform = `translateX(-${newOffsetLeft}px)`;
  //   setPosIndex(newIndex);
  //   setShowRight(totalDistanceRef.current > newOffsetLeft);
  //   setShowLeft(newOffsetLeft > 0);
  // }
  // function leftClickHandle() {
  //   const newIndex = posIndex - 1;
  //   const newEl = scrollContentRef.current.children[newIndex];
  //   const newOffsetLeft = newEl.offsetLeft;
  //   console.log(newOffsetLeft);
  //   scrollContentRef.current.style.transform = `translateX(-${newOffsetLeft}px)`;
  //   setPosIndex(newIndex);
  //   setShowRight(totalDistanceRef.current > newOffsetLeft);
  //   setShowLeft(newOffsetLeft > 0);
  // }
  return (
    <ViewWrapper>
      <div className="wrapper">
        {showLeft && (
          <div
            className="btn left"
            onClick={(e) => {
              btnClickHandle(false);
            }}
          >
            <IconArrowLeft />
          </div>
        )}
        {showRight && (
          <div
            className="btn right"
            onClick={(e) => {
              btnClickHandle(true);
            }}
          >
            <IconArrowRight />
          </div>
        )}

        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
