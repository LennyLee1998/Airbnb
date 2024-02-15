import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { ViewWrapper } from "./style";

const ScrollView = memo((props) => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  const totalDistanceRef = useRef();

  const scrollContentRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; //整个的宽度
    const clientWidth = scrollContentRef.current.clientWidth; //overflow下的宽度
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
    setShowRight(totalDistance > 0);
  }, [props.children]);

  function rightClickHandle() {
    const newIndex = posIndex + 1;
    const newEl = scrollContentRef.current.children[newIndex];
    const newOffsetLeft = newEl.offsetLeft;
    console.log(newOffsetLeft);
    scrollContentRef.current.style.transform = `translateX(-${newOffsetLeft}px)`;
    setPosIndex(newIndex);
    setShowRight(totalDistanceRef.current > newOffsetLeft);
    setShowLeft(newOffsetLeft > 0);
  }
  function leftClickHandle() {
    const newIndex = posIndex - 1;
    const newEl = scrollContentRef.current.children[newIndex];
    const newOffsetLeft = newEl.offsetLeft;
    console.log(newOffsetLeft);
    scrollContentRef.current.style.transform = `translateX(-${newOffsetLeft}px)`;
    setPosIndex(newIndex);
    setShowRight(totalDistanceRef.current > newOffsetLeft);
    setShowLeft(newOffsetLeft > 0);
  }
  return (
    <ViewWrapper>
      {showLeft && <button onClick={leftClickHandle}>左边按钮</button>}
      {showRight && <button onClick={rightClickHandle}>右边按钮</button>}

      <div className="scroll-content" ref={scrollContentRef}>
        {props.children}
      </div>
    </ViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
