import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: 25%;
  box-sizing: border-box;
  padding: 8px;
  .top {
    position: relative;
    padding: 66.66% 0 0;
    border-radius: 3px;
    overflow: hidden;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  .bottom {
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
      color: ${(props) => props.bottomStyle?.content_color};
      font-size: ${(props) => props.bottomStyle?.font_size};
    }
  }
`;
