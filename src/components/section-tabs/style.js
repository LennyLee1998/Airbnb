import styled from "styled-components";

export const TabsWrapper = styled.div`
  /* display: flex;
  padding: 8px 0;
  overflow: hidden; */
  .tabs {
    flex-basis: 120px;
    flex-shrink: 0;
    margin-right: 16px;
    padding: 14px 16px;
    border-radius: 3px;
    box-sizing: border-box;
    color: ${(props) => props.theme.textColor.primaryColor};
    text-align: center;
    font-size: 17px;
    white-space: nowrap;
    border: 0.5px solid #d8d8d8;
    cursor: pointer;
    transition: box-shadow 300ms ease-in;
    &.active {
      background-color: ${(props) => props.theme.color.secondaryColor};
      color: #fff;
    }
    &:hover {
      box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.2),
        -5px 0 5px -5px rgba(0, 0, 0, 0.2);
    }
  }
`;
