import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 10px;
  color: ${(props) => props.color};
  font-size: 17px;

  .info {
    cursor: pointer;
    .text {
      margin-right: 6px;
      font-weight: 700;
    }
    &:hover {
        text-decoration: underline;
      }
  }
`;
