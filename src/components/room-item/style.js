import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: ${(props) => props.itemWidth};
  box-sizing: border-box;
  padding: 8px;
  flex-shrink: 0;
  cursor: pointer;
  .inner {
    width: 100%;
  }
  .cover {
    position: relative;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;
    box-sizing: border-box;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .slider {
    position: relative;
    cursor: pointer;
    &:hover {
      .control {
        display: flex;
      }
    }
    .control {
      position: absolute;
      z-index: 999;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: none;
      justify-content: space-between;
      color: #fff;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(
          to left,
          transparent 0%,
          rgba(0, 0, 0, 0.25) 100%
        );
        &.right {
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 100%
          );
        }
      }
    }
    .indicator {
      position: absolute;
      z-index: 9;
      bottom: 10px;
      left: 0;
      right: 0;
      width: 30%;
      margin: 0 auto;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 14.29%;

        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;

          &.active {
            width: 8px;
            height: 8px;
          }
        }
      }
    }
  }

  .info {
    color: ${(props) => props.verifyColor};
    font-size: 12px;
    font-weight: 700;
    margin: 10px 0 5px;
  }
  .name {
    font-weight: 700;
    font-size: 16px;
    ${(props) => props.theme.mixin.ellipsis}
  }
  .price {
    margin: 8px 0;
  }
  .review {
    display: flex;
    align-items: center;
    color: ${(props) => props.bottomStyle?.content_color};
    /* font-size: ${(props) => props.bottomStyle?.font_size}; */
    font-size: 12px;
    font-weight: 700;

    .count {
      margin: 0 2px 0 4px;
    }
  }
`;
