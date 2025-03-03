import React from "react";
import { Category } from "../../pages/Home";
import { ProductCarousel } from "../Slider/Slider";
import * as S from "./styles";

export const ProductSection = ({
  id,
  categoryName,
  promo,
  textcolor,
  titlesize,
}: Category) => {
  return (
    <S.ProductSectionDiv
      promo={promo}
      textcolor={textcolor}
      titlesize={titlesize}
    >
      <div className="container">
        <div className="section-title">
          <h2>{categoryName}</h2>
        </div>
        <ProductCarousel
          promo={promo}
          categoryId={id}
          categoryName={categoryName}
        />
      </div>
    </S.ProductSectionDiv>
  );
};
