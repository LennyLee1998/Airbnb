import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 100px;
  border-top: 1px solid #ebebeb;
  color: #767676;
  .footer-content {
    width: 1080px;
    margin: 0 auto;
    padding: 48px 24px 0 24px;
    box-sizing: border-box;

    .item {
      display: flex;
      /* justify-content: space-between; */
      .info {
        flex: 1;
        display: flex;
        flex-direction: column;

        .title {
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .text {
          font-size: 14px;
          margin-top: 6px;
        }
      }
    }
  }
  .statement {
    margin-top: 30px;
    border-top: 1px solid #ebebeb;
    padding: 20px 20px 68px;
    text-align: center;
  }
`;
