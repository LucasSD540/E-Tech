import discount from "../../utils/images/discount.png";
import { ProductCarousel } from "../Slider/Slider";
import * as S from "./styles";

export const ProductSection = ({ children, promo, textColor, titleSize }) => {
  return (
    <S.ProductSectionDiv
      promo={promo}
      textColor={textColor}
      titleSize={titleSize}
    >
      <div className="container">
        <div className="section-title">
          <h2>{children}</h2>
          <img src={discount} alt="discount-image" />
        </div>
        <ProductCarousel promo={promo} />
      </div>
    </S.ProductSectionDiv>
  );
};
