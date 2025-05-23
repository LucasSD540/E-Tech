import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchCategoryQuery } from "../../services/categoryApi";
import { useIsAuthenticatedQuery } from "../../services/authApi";
import { changeIsAuth } from "../../store/slices/loginSlice";
import { ProductSection } from "../../components/ProductSection";
import { OfferSection } from "../../components/OfferSection";
import { RootState } from "../../store";
import * as S from "./styles";
import { FilteredSection } from "../../components/FilteredSection";

const banner = "/assets/images/banner.png";

export type Category = {
  id: number;
  categoryName: string;
  promo: boolean;
  textcolor: string;
  titlesize: string;
};

export const Home = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(
    (state: RootState) => state.filtered.searchTerm
  );

  const { data: categoryData = [] } = useFetchCategoryQuery({});
  const { data: isAuthData, isLoading } = useIsAuthenticatedQuery({});

  useEffect(() => {
    if (isAuthData) {
      dispatch(changeIsAuth(true));
    } else if (!isAuthData && !isLoading) {
      dispatch(changeIsAuth(false));
    }
  }, [isAuthData, dispatch, isLoading]);

  return (
    <S.HomeDiv>
      <div className="banner-div">
        <img className="banner-img" src={banner} alt="banner-image" />
        <div className="text-div">
          <div className="container">
            <h1 className="title-h1">E-Tech</h1>
            <p className="subtitle-p">
              Tecnologia descomplicada, escolha personalizada
            </p>
          </div>
        </div>
      </div>
      {searchTerm ? (
        <FilteredSection />
      ) : (
        <>
          <OfferSection />
          {categoryData.map((category: Category, index: number) => (
            <ProductSection
              key={index}
              id={category.id}
              categoryName={category.categoryName}
              promo={category.promo}
              textcolor="#2E3A59"
              titlesize="30px"
            />
          ))}
        </>
      )}
    </S.HomeDiv>
  );
};
