import styled from "styled-components";

export const LoginDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 64px 0 80px 0;

  .title {
    font-size: 20px;
    color: var(--primary-color);
  }

  .styled-input {
    padding-left: 16px;
    max-width: 300px;
    width: 100%;
    height: 50px;
    border-radius: 15px;
    border: none;
    box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.75);
    font-size: 18px;
    outline: none;
  }

  ::-webkit-input-placeholder {
    color: #999;
  }

  .password {
    margin: 32px 0 8px 0;
  }

  .forgot-link {
    font-size: 12px;
    color: var(--forgot-text-color);
    cursor: pointer;
    margin-bottom: 28px;

    &:hover {
      text-decoration: underline;
    }
  }

  .styled-btn {
    max-width: 300px;
    width: 100%;
    height: 50px;
    border: none;
    box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.75);
    background: linear-gradient(45deg, #1a73e8, #0058cc);
    color: var(--background-color);
    font-size: 24px;
    font-weight: bold;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
      background: linear-gradient(45deg, #0058cc, #1a73e8);
    }
  }

  .div-1 {
    color: var(--primary-color);
    border-right: 1px solid var(--primary-color);

    .title {
      margin: 32px 0;
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
  }

  .div-2 {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .title-div {
      max-width: 300px;
      width: 100%;
    }

    .title {
      margin-bottom: 32px;
    }

    .styled-input {
      margin-bottom: 32px;
    }

    .styled-btn {
      margin-top: 12px;
    }
  }
`;
