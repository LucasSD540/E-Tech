import styled from "styled-components";

type Props = {
  overlay: boolean;
};

export const Overlay = styled.div<Props>`
  display: ${(props) => (props.overlay ? "block" : "none")};
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 10;
`;
