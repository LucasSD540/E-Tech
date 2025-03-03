import React from "react";
import { OfferProductCarousel } from "../Slider/offerSlider";
import * as S from "../ProductSection/styles";

const discount = "assets/images/discount.png";

export const OfferSection = () => {
  return (
    <S.ProductSectionDiv promo={true} textcolor="#E63946" titlesize="32px">
      <div className="container">
        <div className="section-title">
          <h2>Ofertas imperdíveis</h2>
          <img src={discount} alt="discount-image" />
        </div>
        <OfferProductCarousel />
      </div>
    </S.ProductSectionDiv>
  );
};
