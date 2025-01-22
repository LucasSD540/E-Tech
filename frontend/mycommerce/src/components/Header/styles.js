import styled from "styled-components";

export const HeaderDiv = styled.div`
  height: 60px;
  width: 100%;
  background-color: #2e3a59;
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

      li {
        color: #fff;
        list-style: none;
        font-size: 20px;
        cursor: pointer;
      }

      li:hover {
        font-weight: bold;
      }

      .center {
        margin: 0 24px;
      }
    }
  }
`;
