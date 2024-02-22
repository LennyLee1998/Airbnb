import styled from "styled-components";

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  .btns {
    display: flex;
    align-items: center;
    font-weight: 700;
    color: ${(props) => (props.theme.isAlpha ? "#fff" : "")};
    .btn {
      box-sizing: border-box;
      padding: 12px 15px;
      border-radius: 21px;
      ${(props) => props.theme.mixin.boxBg}/* cursor: pointer;
      &:hover {
        background-color: #f5f5f5;
        border-radius: 21px;
      } */
    }
  }
  .infos {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 77px;
    height: 42px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    border-radius: 21px;
    background-color: #fff;

    ${(props) =>
      props.theme.mixin.boxShadow}/* transition: box-shadow 0.2s ease-in;
    &:hover {
      box-shadow: 0 2px 4px rgba(0,0,0,.18);
    } */
  }

  .panel {
    position: absolute;
    top: 50px;
    right: 0;
    font-weight: 700;
    color: #666;
  }
`;
