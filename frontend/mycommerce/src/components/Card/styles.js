import styled from "styled-components";

export const CardDiv = styled.div`
  height: 260px;
  max-width: 200px;
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 10px;

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
    color: #a7a7a7;
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
    }

    .btn-1 {
      background-color: #1a73e8;
      color: #fff;
    }

    .btn-2 {
      background-color: #dddddd;
      color: #000;
    }
  }
`;
