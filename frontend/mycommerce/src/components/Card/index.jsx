import { useState } from "react";
import favorite_red_outline from "../../utils/images/favorite_red_outline.png";
import favorite_blue_outline from "../../utils/images/favorite_blue_outline.png";
import favorite_red from "../../utils/images/favorite_red.png";
import favorite_blue from "../../utils/images/favorite_blue.png";
import product from "../../utils/images/product.png";
import promo_icon from "../../utils/images/promo_icon.png";
import * as S from "./styles";

export const Card = ({ promo }) => {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite((prevFavorite) => !prevFavorite);
  };

  return (
    <S.CardDiv promo={promo}>
      <div className="product-img-div">
        <img className="product-img" src={product} alt="product-image" />
        <img
          className="favorite-icon"
          src={
            promo
              ? favorite
                ? favorite_red
                : favorite_red_outline
              : favorite
              ? favorite_blue
              : favorite_blue_outline
          }
          alt="favorite-icon"
          onClick={handleFavorite}
        />
      </div>
      <div className="product-info">
        <h3 className="product-title">Iphone XR 64gb</h3>
        <div className="discount-flag">
          <img src={promo_icon} alt="" />
          <p>10%</p>
        </div>
        <p className="product-category">Eletrônicos</p>
        <p className="product-oldPrice">
          <s>R$ 2199,90</s>
        </p>
        <p className="product-price">R$ 1899,90</p>
        <div className="buttons">
          <button className="btn btn-1">Comprar</button>
          <button className="btn btn-2">Carrinho</button>
        </div>
      </div>
    </S.CardDiv>
  );
};
