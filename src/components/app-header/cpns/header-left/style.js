import styled from "styled-components";

export const LeftWrapper = styled.div`
  color: ${props => props.theme.isAlpha ? "#fff" : props.theme.color.primaryColor};
  .logo-icon {
    cursor: pointer;
  }
`;
