import styled from "styled-components";

export const SectionsWrapper = styled.div`
  position: absolute;
  z-index: 999;
  bottom: -78px;
  left: 50%;
  transform: translateX(-50%);
  .search-section {
    display: flex;
    align-items: center;
    width: 850px;
    height: 66px;
    border-radius: 32px;
    border: 1px solid #ddd;
    background-color: #fff;
    .section-item {
      flex: 1;
      display: flex;
      align-items: center;
      height: 100%;
      border-radius: 32px;
      cursor: pointer;
      &:last-child {
        .info {
          border-right: none;
        }
      }
      &:hover {
        background-color: #eee;
      }
      .info {
        flex: 1;
        padding: 0 30px;
        border-right: 2px solid #ddd;

        .title {
          font-size: 12px;
          font-weight: 800;
          color: #222;
        }
        .desc {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
`;
