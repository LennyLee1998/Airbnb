import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 80px;
  box-sizing: border-box;
  padding: 0 24px;
  border-bottom: 1px solid #ddd;
  .header-icon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  .header-search {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
