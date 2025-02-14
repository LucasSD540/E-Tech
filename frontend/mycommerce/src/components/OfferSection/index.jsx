import discount from "../../assets/images/discount.png";
import { OfferProductCarousel } from "../Slider/offerSlider";
import * as S from "../ProductSection/styles";

export const OfferSection = () => {
  return (
    <S.ProductSectionDiv textColor="#E63946" titleSize="32px">
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
