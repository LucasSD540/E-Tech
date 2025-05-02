import styled from "styled-components";

export const CartDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 64px 0 80px 0;

  .myCart-p {
    color: var(--primary-color);
    font-size: 24px;
    margin-bottom: 12px;
  }

  .myItems-p {
    color: var(--light-gray-text-color);
    font-size: 16px;
  }

  .itemsResume-p {
    color: var(--primary-color);
    font-size: 24px;
    margin-bottom: 64px;
  }

  .label-input-div {
    display: flex;
    flex-direction: column;

    .input-label {
      color: var(--primary-color);
      font-size: 16px;
      margin-bottom: 8px;
    }

    .cep-input {
      max-width: 198px;
      width: 100%;
      height: 23px;
      border-radius: 5px;
      padding-left: 8px;
      margin-bottom: 32px;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

      &::placeholder {
        color: var(--light-gray-text-color);
        font-size: 12px;
      }
    }

    .cep-btn {
      height: 25px;
      width: 80px;
      font-size: 10px;
      margin-left: 8px;
      border: none;
      border-radius: 5px;
      background: linear-gradient(45deg, #1a73e8, #0058cc);
      color: #fff;
      cursor: pointer;

      &:hover {
        background: linear-gradient(45deg, #0058cc, #1a73e8);
      }
    }
  }

  .sub-total-p {
    color: var(--primary-color);
    font-size: 16px;
    margin-bottom: 24px;
  }

  .freight-p {
    color: var(--primary-color);
    font-size: 16px;
  }

  .time-p {
    color: var(--primary-color);
    font-size: 16px;
  }

  .line {
    background-color: #000;
    margin: 12px 0;
  }

  .total-p {
    color: var(--primary-color);
    font-size: 16px;
    font-weight: bold;
  }

  .finish-btn {
    font-size: 18px;
    font-weight: bold;
    max-width: 250px;
    width: 100%;
    height: 45px;
    background: linear-gradient(45deg, #1a73e8, #0058cc);
    color: #fff;
    border: none;
    border-radius: 10px;
    margin-top: 48px;
    cursor: pointer;

    &:hover {
      background: linear-gradient(45deg, #0058cc, #1a73e8);
    }
  }

  .freight-time-div {
    display: flex;
    gap: 24px;
  }
`;
