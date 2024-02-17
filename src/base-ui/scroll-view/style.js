import styled from "styled-components";

export const ViewWrapper = styled.div`
  position: relative;
  .wrapper {
    overflow: hidden;
  }
  .btn {
    position: absolute;
    z-index: 99;
    top: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 14px;
    /* background-color: red; */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    cursor: pointer;
    background-color: #fff;

    &.left {
      left: 0;
      transform: translate(-50%, -50%);
    }
    &.right {
      right: 0;
      transform: translate(50%, -50%);
    }
  }
  .scroll-content {
    position: relative;
    z-index: 9;
    display: flex;
    padding: 8px 0;
    margin: 0 -8px;

    transition: transform 200ms ease;
  }
`;
