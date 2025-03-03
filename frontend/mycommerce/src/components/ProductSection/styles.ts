import styled from "styled-components";

type Props = {
  promo: boolean;
  titlesize: string;
  textcolor: string;
};

export const ProductSectionDiv = styled.div<Props>`
  .swiper-button-next,
  .swiper-button-prev {
    color: var(--third-text-color);
  }

  .container {
    padding: 32px 0 48px 0;

    .section-title {
      margin-bottom: 40px;
      display: flex;
      align-items: center;

      h2 {
        font-size: ${(props) => props.titlesize};
        color: ${(props) => props.textcolor};
        margin-right: 4px;
      }

      img {
        height: 32px;
        width: 32px;
      }
    }
  }
`;
