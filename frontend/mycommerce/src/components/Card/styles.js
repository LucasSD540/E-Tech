import styled from "styled-components";

export const CardDiv = styled.div`
  height: 260px;
  max-width: 200px;
  width: 100%;
  background-color: var(--card-background-color);
  border-radius: 10px;

  .product-img-div {
    position: relative;

    .product-img {
      border-radius: 10px;
    }
  }

  .favorite-icon {
    position: absolute;
    right: 8px;
    top: 8px;
    height: 24px;
    width: 24px;
    cursor: pointer;
  }

  .product-info {
    padding: 0px 12px 8px 12px;
    position: relative;

    .discount-flag {
      position: absolute;
      top: -12px;
      right: 20px;
      height: 45px;
      width: 20px;

      img {
        display: ${(props) => (props.promo ? "block" : "none")};
        position: absolute;
        height: 45px;
        width: 20px;
      }

      p {
        margin-top: 8px;
        transform: rotate(90deg);
        color: #fff;
        font-size: 12px;
        font-weight: bold;
      }
    }
  }

  .product-title {
    font-size: 14px;
    margin: 8px 0;
  }

  .product-category {
    font-size: 12px;
    margin-bottom: ${(props) => (props.promo ? "2px" : "16px")};
  }

  .product-oldPrice {
    display: ${(props) => (props.promo ? "block" : "none")};
    font-size: 12px;
    color: var(--secondary-text-color);
  }

  .product-price {
    font-weight: bold;
    margin-bottom: 8px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;

    .btn {
      font-size: 12px;
      font-weight: bold;
      border-radius: 5px;
      border: none;
      height: 30px;
      width: 80px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }

    .btn-1 {
      background-color: ${(props) =>
        props.promo ? "var(--btn-red-color)" : "var(--btn-blue-color)"};
      color: #fff;
    }

    .btn-2 {
      background-color: var(--btn-gray-color);
      color: var(--third-text-color);
    }
  }
`;
