export const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848A",
  },
  textColor: {
    primaryColor: "#484848",
    secondaryColor: "#222",
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 0.2s ease-in;
      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,.18);
      } 
    `,
    boxBg: `
      cursor: pointer;
      &:hover {
        background-color: #f5f5f5;
      }
    `,
    ellipsis: `
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    `,
  },
};
