import styled from "styled-components";

export const BrowserWrapper = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #333;

  display: flex;
  flex-direction: column;

  height: 100%;
  .top {
    height: 86px;
    position: relative;
    /* background-color: #000; */
    .close {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }
  .slider {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1;
    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      color: #fff;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }
    .picture {
      position: relative;
      width: 100%;
      overflow: hidden;
      height: 100%;
      max-width: 105vh;
      img {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }
      .pic-enter {
        transform: translate(${(props) => (props.isNext ? "100%" : "-100%")});
        opacity: 0;
      }
      .pic-enter-active {
        transform: translate(0);
        opacity: 1;
      }
      .pic-exit {
        opacity: 1;
      }

      .pic-exit-active {
        opacity: 0;
      }
      .pic-enter-active,
      .pic-exit-active {
        transition: all 200ms ease;
      }
    }
  }
  .preview {
    color: #fff;
    height: 100px;
    margin-top: 10px;
    align-items: center;
    display: flex;
    flex-direction: column;
    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      .desc {
        display: flex;
        justify-content: space-between;
        .toggle {
          cursor: pointer;
        }
      }
      .list {
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease;
        height: ${(props) => (props.showList ? "67px" : "0")};

        .item {
          margin-right: 15px;
          cursor: pointer;
          img {
            height: 67px;
            opacity: 0.5;
          }
          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
