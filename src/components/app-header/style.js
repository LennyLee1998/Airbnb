import styled from "styled-components";

export const HeaderWrapper = styled.div`
  /* height: 80px; */
  &.fixed {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
  }
  .header-content {
    position: relative;
    height: 80px;
    z-index: 999;
    box-sizing: border-box;
    border-bottom: ${(props) =>
      props.isSearch  ? "none" : "1px solid #ddd"};
    background-color: ${(props) =>
      props.isAlpha ? "rbga(255, 255, 255, 0)" : "rgba(255, 255, 255, 1)"};
    .header-icon {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
      padding: 0 24px;
    }
    .header-search {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .search-area {
      height: ${(props) => (props.isSearch ? "100px" : "0")};
      background-color: ${props => props.isAlpha ? "" : "#fff"};
      transition: height 250ms ease;
    }
  }
  .cover {
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
