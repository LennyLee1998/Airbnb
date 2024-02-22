import styled from "styled-components";

export const TabsWrapper = styled.div`
  height: 48px;
  display: flex;
  position: relative;
  z-index: 9999;
  color: ${(props) => (props.theme.isAlpha ? "#fff" : "#222")};
  .tabs {
    display: flex;
    font-size: 16px;
    .tab {
      width: 64px;
      height: 20px;
      cursor: pointer;
      margin: 10px 16px;

      .bottom {
        height: 10px;
        width: 100%;
        border-bottom: 2px solid #333;
        border-bottom-color: ${(props) =>
          props.theme.isAlpha ? "#fff" : "#333"};
      }
    }
  }
`;
