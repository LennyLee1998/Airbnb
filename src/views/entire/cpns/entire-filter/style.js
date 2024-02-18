import styled from "styled-components";

export const FilterWrapper = styled.div`
  /* position: fixed; */
  z-index: 99;
  top: 80px;
  left: 0;
  right: 0;
  height: 48px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
  .filter-list {
    display: flex;
    .filter-item {
      padding: 6px 12px;
      margin: 0 4px 0 8px;
      border: 1px solid #dce0e0;
      border-radius: 4px;
      cursor: pointer;
      &.active {
        background-color: #008489;
        border: 1px solid #008489;
        color: #fff;
      }
    }
  }
`;
