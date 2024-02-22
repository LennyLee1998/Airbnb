import styled from "styled-components";

export const CenterWrapper = styled.div`
  .search {
    width: 300px;
    height: 48px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 24px;
    padding: 0 8px;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}
  }
  .text {
    flex: 1;
    font-weight: 700;
    color: #000;
    padding: 0 16px;
  }
  .icon-search {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    background-color: ${(props) => props.theme.color.primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  .detail-exit {
    transform: scale(1) translateY(0);
    opacity: 1;
  }

  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1) translateY(0);
    opacity: 1;
  }

  .bar-exit {
    opacity: 0;
  }
`;
