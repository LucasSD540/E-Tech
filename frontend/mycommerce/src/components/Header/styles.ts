import styled from "styled-components";

export const HeaderDiv = styled.div`
  height: 60px;
  width: 100%;
  background-color: var(--primary-color);
  display: flex;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .img-link {
      height: 38px;

      img {
        height: 38px;
      }
    }

    .header-input {
      max-width: 431px;
      width: 100%;
      height: 30px;
      border-radius: 5px;
      padding-left: 16px;
      outline: none;
    }

    nav {
      width: 331.85px;
      display: flex;
      justify-content: space-between;
      position: relative;

      .link-item {
        color: #fff;
        list-style: none;
        text-decoration: none;
        font-size: 20px;
        cursor: pointer;
      }

      .active-link {
        font-weight: bold;
      }

      .link-item:hover {
        text-decoration: underline;
      }

      .popUp-div {
        position: absolute;
        top: 30px;
        left: 75px;
        padding: 12px 18px;
        background-color: var(--background-color);
        border-radius: 5px;
        width: 120px;
        height: 60px;
        z-index: 20;

        .link-item {
          font-size: 12px;
          font-weight: bold;
        }

        .first {
          margin-bottom: 8px;
        }

        .link {
          text-decoration: none;
          color: var(--primary-color);
        }

        .link:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
