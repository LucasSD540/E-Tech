import styled from "styled-components";

export const ProductDetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 0 80px 0;

  .back-div {
    width: 100%;
    margin-bottom: 48px;
  }

  .back-btn {
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 95px;

    p {
      font-size: 24px;
      color: var(--primary-color);
    }
  }

  .info-div {
    display: flex;
    justify-content: space-between;

    .div-1 {
      img {
        max-width: 380px;
        width: 100%;
        height: 250px;
        border-radius: 10px;
        margin-bottom: 32px;
      }

      .price-p {
        font-size: 26px;
        font-weight: bold;
        color: var(--primary-color);
      }

      .p-input-div {
        display: flex;
        justify-content: space-between;

        .quantity-input {
          max-width: 80px;
          width: 100%;
          height: 30px;
          border-radius: 10px;
          padding: 0 16px 0 16px;
        }
      }

      .buy-btn {
        color: #fff;
        background: linear-gradient(45deg, #1a73e8, #0058cc);
        height: 45px;
        max-width: 380px;
        width: 100%;
        margin-top: 36px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        font-size: 24px;
        font-weight: bold;

        &:hover {
          background: linear-gradient(45deg, #0058cc, #1a73e8);
        }
      }
    }

    .div-2 {
      h5 {
        font-size: 24px;
        font-weight: bold;
        color: var(--primary-color);
        margin-bottom: 48px;
      }

      p {
        font-size: 16px;
        color: var(--primary-text-color);
      }
    }
  }
`;
