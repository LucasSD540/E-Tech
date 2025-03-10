import React from "react";
import { useDispatch } from "react-redux";
import { changeOverlay, changePopUp } from "../../store/slices/overlaySlice";
import * as S from "./styles";

type Props = {
  overlay: boolean;
};

export const Overlay = ({ overlay }: Props) => {
  const dispatch = useDispatch();

  const closeOverlay = () => {
    dispatch(changePopUp(false));
    dispatch(changeOverlay(false));
  };

  return <S.Overlay onClick={closeOverlay} overlay={overlay} />;
};
