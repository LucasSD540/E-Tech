import styled from "styled-components";

type Props = {
  overlay: boolean;
};

export const SearchOverlay = styled.div<Props>`
  display: ${(props) => (props.overlay ? "block" : "none")};
  position: fixed;
  margin-top: 60px;
  height: 100%;
  width: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.4);
`;
