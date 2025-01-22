import styled from "styled-components";

export const ProductSectionDiv = styled.div`
  .container {
    padding: 32px 0 48px 0;

    .section-title {
      margin-bottom: 40px;
      display: flex;
      align-items: center;

      h2 {
        font-size: ${(props) => props.titleSize || "30px"};
        color: ${(props) => props.textColor};
        margin-right: 4px;
      }

      img {
        display: ${(props) => (props.promo ? "block" : "none")};
        height: 32px;
        width: 32px;
      }
    }
  }
`;
