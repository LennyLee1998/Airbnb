import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 80px;
  &.fixed {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
  }
  .header-content {
    position: relative;
    box-sizing: border-box;
    padding: 0 24px;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    .header-icon {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
    }
    .header-search {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
