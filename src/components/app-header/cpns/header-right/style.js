import styled from "styled-components";

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  .btns {
    display: flex;
    align-items: center;
    font-weight: 700;
    .btn {
      box-sizing: border-box;
      padding: 12px 15px;
      cursor: pointer;
      /* background-color: #333; */
      &:hover {
        background-color: #f5f5f5;
        border-radius: 21px;
      }
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

    &:hover {
      box-shadow: 0 2px 4px rgba(0,0,0,.18);
    }
  }
`;
