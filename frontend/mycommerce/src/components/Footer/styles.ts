import styled from "styled-components";

export const FooterDiv = styled.div`
  width: 100%;
  height: 150px;
  padding: 24px;
  background-color: var(--primary-color);
  color: var(--background-color);
  text-align: center;

  nav {
    display: flex;
    justify-content: space-between;

    li {
      display: flex;
      align-items: center;
      list-style: none;
      max-width: 200px;
      width: 100%;
      cursor: pointer;

      img {
        margin-right: 8px;
      }
    }
  }

  .copy-info {
    margin: 32px 0 8px 0;
  }

  .dev-info {
    font-size: 14px;
  }
`;
