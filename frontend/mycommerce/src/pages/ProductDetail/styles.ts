import styled from "styled-components";

export const ProductDetailDiv = styled.div`
  padding: 64px 0 80px 0;

  .up-div {
    display: flex;
    flex-direction: column;
  }

  .flex-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .back-div {
    width: 215px;
    margin-bottom: 48px;
  }

  .back-btn {
    display: flex;
    align-items: center;
    text-decoration: none;

    p {
      font-size: 24px;
      color: var(--primary-color);
    }
  }

  .info-div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 48px;

    .div-1 {
      max-width: 451px;
      width: 100%;
      height: 286px;

      img {
        max-width: 451px;
        width: 100%;
        height: 286px;
      }

      .price-p {
        font-size: 26px;
        font-weight: bold;
        color: var(--primary-color);
      }
    }

    .div-2 {
      width: 407px;

      .name-p {
        font-size: 26px;
        font-weight: bold;
        color: var(--primary-color);
        margin-bottom: 76px;
      }

      .shipping-div {
        margin-bottom: 37px;
      }

      .cep-input {
        width: 216px;
        height: 37px;
        border-radius: 7px;
        padding-left: 7px;

        &::placeholder {
          color: var(--primary-color);
          font-size: 18px;
        }
      }

      .calc-btn {
        background: linear-gradient(45deg, #1a73e8, #0058cc);
        color: #fff;
        height: 37px;
        width: 145px;
        font-size: 20px;
        font-weight: bold;
        border-radius: 10px;
        border: none;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        cursor: pointer;
      }

      .quantity-input-div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 116px;
        height: 37px;
        border-radius: 7px;
        border: 1px solid #333;

        button {
          background: transparent;
          border: none;
          font-size: 20px;
          padding: 7px;
          cursor: pointer;
        }
      }

      .price-p {
        font-size: 26px;
        font-weight: bold;
        color: var(--primary-color);
      }

      .btn {
        color: #fff;
        background: linear-gradient(45deg, #1a73e8, #0058cc);
        height: 45px;
        width: 100%;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        font-size: 24px;
        font-weight: bold;

        &:hover {
          background: linear-gradient(45deg, #0058cc, #1a73e8);
        }
      }

      .add-btn {
        margin: 37px 0 25px 0;
        background: linear-gradient(45deg, #509cff, #4495ff);

        &:hover {
          background: linear-gradient(45deg, #4495ff, #509cff);
        }
      }
    }
  }
`;
