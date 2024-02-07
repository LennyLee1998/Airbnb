import styled from "styled-components";

export const CenterWrapper = styled.div`
  width: 300px;
  height: 48px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 24px;
  padding: 0 8px;
  cursor: pointer;
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
`;
