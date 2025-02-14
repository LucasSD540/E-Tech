import { useFetchCategoryQuery } from "../../services/categoryApi";
import banner from "../../assets/images/banner.png";
import { ProductSection } from "../../components/ProductSection";
import * as S from "./styles";
import { OfferSection } from "../../components/OfferSection";

export const Home = () => {
  const { data: categoryData = [] } = useFetchCategoryQuery({});

  return (
    <S.HomeDiv>
      <img src={banner} alt="banner-image" />
      <OfferSection />
      {categoryData.map((category, index) => (
        <ProductSection
          key={index}
          category={category}
          children={category.name}
          promo={false}
          textColor="#2E3A59"
        />
      ))}
    </S.HomeDiv>
  );
};
