import styled from "styled-components";

export const ProductCardDiv = styled.div`
  display: flex;
  width: calc(100% - 24px);
  height: 100px;
  background-color: var(--card-background-color);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 32px 0;

  .info-div {
    width: 100%;
    padding: 24px 16px;
    display: flex;
    justify-content: space-between;

    p {
      font-size: 13px;
      color: #485460;
    }

    .first-div {
      width: 52%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .product-name {
        color: #000;
        font-weight: bold;
        font-size: 15px;
      }

      .increase {
        margin: 0 8px;
        cursor: pointer;
        font-size: 15px;
      }

      .decrease {
        cursor: pointer;
        font-size: 15px;
      }
    }

    .second-div
      width: 45%;
      
      .remove-div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        cursor: pointer;
        margin-top: 20px;
    
        p {
          font-size: 12px;
          color: red;
          margin-right: 4px;
        }
    
        img {
          width: 9.33px;
          height: 12px;
        }
      }
    }
  }

  .img {
    border-radius: 10px 0px 0 10px;
  }

`;
