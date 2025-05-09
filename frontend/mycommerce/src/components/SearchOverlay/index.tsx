import React from "react";
import { useDispatch } from "react-redux";
import { changeSearchOverlay } from "../../store/slices/overlaySlice";
import * as S from "./styles";

type Props = {
  overlay: boolean;
};

export const SearchOverlay = ({ overlay }: Props) => {
  const dispatch = useDispatch();

  const closeOverlay = () => {
    dispatch(changeSearchOverlay(false));
  };

  return <S.SearchOverlay onClick={closeOverlay} overlay={overlay} />;
};
