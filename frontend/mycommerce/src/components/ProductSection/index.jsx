import { useFetchCategoryQuery } from "../../services/categoryApi";
import discount from "../../assets/images/discount.png";
import { ProductCarousel } from "../Slider/Slider";
import * as S from "./styles";

export const ProductSection = ({ children, promo, textColor, titleSize }) => {
  const { data: categoryData = [] } = useFetchCategoryQuery({});

  return (
    <>
      {categoryData.map((category, index) => (
        <S.ProductSectionDiv
          key={index}
          promo={promo}
          textColor={textColor}
          titleSize={titleSize}
        >
          <div className="container">
            <div className="section-title">
              <h2>{category.name}</h2>
              {promo && <img src={discount} alt="discount-image" />}
            </div>
            <ProductCarousel promo={promo} products={category.products} />
          </div>
        </S.ProductSectionDiv>
      ))}
    </>
  );
};
