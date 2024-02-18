import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .text {
    margin-top: 16px;
    color: #222;
  }

  .Mui-selected {
    background-color: #222 !important;
    color: #fff;
  }
  .MuiPaginationItem-page {
    margin: 0 9px !important;
  }
`;
