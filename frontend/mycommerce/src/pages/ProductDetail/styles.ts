import styled from "styled-components";

type Props = {
  percentage: number;
};

export const ProductDetailDiv = styled.div`
  padding: 124px 0 80px 0;

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
        border-radius: 10px;
      }

      .name-p {
        font-size: 26px;
        font-weight: bold;
        color: var(--primary-color);
        margin-bottom: 24px;
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
        margin-top: 36px;
        outline: none;

        &:hover {
          background: linear-gradient(45deg, #0058cc, #1a73e8);
        }
      }
    }

    .div-2 {
      width: 500px;

      .desc-h5 {
        color: #2e3a59;
        font-size: 24px;
        margin-bottom: 48px;
      }

      .product-info-h3 {
        color: #2e3a59;
        font-size: 20px;
        margin: 36px 0 48px 0;
      }

      .task-p {
        font-size: 20px;
        font-weight: bold;
      }

      .task-div {
        margin-bottom: 24px;
      }
    }
  }
`;

export const BaseProgressBar = styled.div`
  background-color: #d9d9d9;
  width: 280px;
  height: 40px;
  border-radius: 10px;
  overflow: hidden;
`;

export const FilledProgressBar = styled.div<Props>`
  background-color: #1a73e8;
  height: 100%;
  width: ${(props) => `${props.percentage}%`};
  border-radius: 10px;
  transition: width 0.3s ease-in-out;
`;
