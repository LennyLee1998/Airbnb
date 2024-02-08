import styled from "styled-components";

export const PopoverWrapper = styled.div`
  width: 240px;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.18);
  background-color: #fff;

  .top {
    display: flex;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
    box-sizing: border-box;
    .btn {
      height: 40px;
      line-height: 40px;
      padding: 0 16px;
      border-radius: 20px;
      ${(props) => props.theme.mixin.boxBg}
    }
  }
  .bottom {
    padding: 10px 0;
    .info {
      height: 40px;
      line-height: 40px;
      padding: 0 16px;
      ${props => props.theme.mixin.boxBg}
    }
  }
`;
