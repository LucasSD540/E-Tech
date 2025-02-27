import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFetchCategoryQuery } from "../../services/categoryApi";
import { useIsAuthenticatedQuery } from "../../services/authApi";
import { changeIsAuth } from "../../store/slices/loginSlice";
import banner from "../../assets/images/banner.png";
import { ProductSection } from "../../components/ProductSection";
import * as S from "./styles";
import { OfferSection } from "../../components/OfferSection";

export const Home = () => {
  const dispatch = useDispatch();

  const { data: categoryData = [] } = useFetchCategoryQuery({});
  const { data: isAuthData, isLoading } = useIsAuthenticatedQuery();

  useEffect(() => {
    if (isAuthData) {
      dispatch(changeIsAuth(true));
    } else if (!isAuthData && !isLoading) {
      dispatch(changeIsAuth(false));
    }
  }, [isAuthData, dispatch, isLoading]);

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
