import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { ProductCarousel } from "../Slider/Slider";
import { useFetchCategoryQuery } from "../../services/categoryApi";
import { useFetchProductQuery } from "../../services/productApi";
import { ProductCarouselByIds } from "./productFiltered";
import "./styles.css";
import { clearFilter } from "../../store/slices/filteredSlice";

const back = "/assets/images/back_icon.png";

export const FilteredSection = () => {
  const dispatch = useDispatch();

  const { matchedCategoryIds, matchedProductIds, searchTerm } = useSelector(
    (state: RootState) => state.filtered
  );

  const { data: categories = [] } = useFetchCategoryQuery({});
  const { data: products = [] } = useFetchProductQuery({});

  const filteredProducts = products.filter((prod: any) =>
    matchedProductIds.includes(prod.id)
  );

  const showCategories = matchedCategoryIds.length > 0;
  const showProducts = filteredProducts.length > 0;

  return (
    <div className="filtered-section container">
      <div onClick={() => dispatch(clearFilter())} className="back-btn">
        <img src={back} alt="" />
        <p className="back-p">Voltar</p>
      </div>
      <h2 className="result-term-text">Resultados para: "{searchTerm}"</h2>

      {showCategories &&
        matchedCategoryIds.map((catId) => {
          const category = categories.find((c: any) => c.id === catId);
          return (
            <div key={catId}>
              <h3 className="matched-text">{category?.categoryName}</h3>
              <ProductCarousel
                categoryId={catId}
                promo={false}
                categoryName={`Busca para o termo ${searchTerm}`}
              />
            </div>
          );
        })}

      {showProducts && matchedCategoryIds.length === 0 && (
        <div>
          <h3 className="matched-text">Produtos encontrados:</h3>
          <ProductCarouselByIds productIds={matchedProductIds} />
        </div>
      )}

      {!showCategories && !showProducts && (
        <p>Nenhum resultado encontrado para "{searchTerm}"</p>
      )}
    </div>
  );
};
