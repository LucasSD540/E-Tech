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

    img {
      cursor: pointer;
    }

    nav {
      display: flex;

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

      .center {
        margin: 0 24px;
        position: relative;
      }

      .popUp-div {
        position: absolute;
        top: 30px;
        left: 0;
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
