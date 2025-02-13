import discount from "../../assets/images/discount.png";
import { ProductCarousel } from "../Slider/Slider";
import * as S from "./styles";

export const ProductSection = ({
  category,
  children,
  promo,
  textColor,
  titleSize,
}) => {
  return (
    <S.ProductSectionDiv
      promo={promo}
      textColor={textColor}
      titleSize={titleSize}
    >
      <div className="container">
        <div className="section-title">
          <h2>{children}</h2>
          {promo && <img src={discount} alt="discount-image" />}
        </div>
        <ProductCarousel promo={promo} categoryId={category.id} />
      </div>
    </S.ProductSectionDiv>
  );
};
