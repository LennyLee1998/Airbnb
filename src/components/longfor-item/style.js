import styled from "styled-components";

export const ItemWrapper = styled.div`
  position: relative;
  width: 20%;
  display: flex;
  flex-shrink: 0;
  box-sizing: border-box;
  overflow: hidden;
  padding: 8px;
  padding: 8px;
  img {
    width: 100%;
    border-radius: 3px;
  }
  .item-info {
    height: 50%;
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    color: #fff;
    padding: 0 24px 32px;
    box-sizing: border-box;
    .city {
      font-size: 18px;
      font-weight: 700;
    }
    .price {
      font-size: 14px;
      margin-top: 5px;
    }
  }
  .cover {
    background-image: linear-gradient(
      -180deg,
      rgba(0, 0, 0, 0) 3%,
      rgb(0, 0, 0) 100%
    );
    height: 60%;
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 8px;
  }
`;
