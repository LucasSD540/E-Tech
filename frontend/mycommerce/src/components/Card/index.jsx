import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeProductId } from "../../store/slices/productIdSlice";
import favorite_red_outline from "../../assets/images/favorite_red_outline.png";
import favorite_blue_outline from "../../assets/images/favorite_blue_outline.png";
import favorite_red from "../../assets/images/favorite_red.png";
import favorite_blue from "../../assets/images/favorite_blue.png";
import promo_icon from "../../assets/images/promo_icon.png";
import * as S from "./styles";

export const Card = ({
  promo,
  name,
  discount,
  oldPrice,
  price,
  imageUrl,
  category,
  cardProductId,
}) => {
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);

  const handleSetProductId = () => {
    dispatch(changeProductId(cardProductId));
  };

  const handleFavorite = () => {
    setFavorite((prevFavorite) => !prevFavorite);
  };

  const formatPrice = (preco = 0) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(preco);
  };

  return (
    <S.CardDiv promo={promo}>
      <div className="product-img-div">
        <img className="product-img" src={imageUrl} alt="product-image" />
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
        <h3 className="product-title">{name}</h3>
        {promo && (
          <div className="discount-flag">
            <img src={promo_icon} alt="" />
            <p>{discount}%</p>
          </div>
        )}
        <p className="product-category">{category}</p>
        <p className="product-oldPrice">
          <s>{formatPrice(oldPrice)}</s>
        </p>
        <p className="product-price">{formatPrice(price)}</p>
        <div className="buttons">
          <Link to="/" className="btn btn-1">
            Comprar
          </Link>
          <Link
            onClick={handleSetProductId}
            to={`/product-detail/${cardProductId}`}
            className="btn btn-2"
          >
            Detalhes
          </Link>
        </div>
      </div>
    </S.CardDiv>
  );
};
