import React from "react";
import { formatPrice } from "../../utils/formatPrice";
import "./styles.css";

const favorite_blue = "/assets/images/favorite_blue.png";

type Props = {
  id: number;
  image_url: string;
  productName: string;
  productPrice: number;
  onRemoveFavorite: (id: number) => void;
};

export const FavoriteCard = ({
  id,
  image_url,
  productName,
  productPrice,
  onRemoveFavorite,
}: Props) => {
  return (
    <div className="favorite-card-div">
      <img src={image_url} alt="" />
      <img
        onClick={() => onRemoveFavorite(id)}
        className="favorite-icon"
        src={favorite_blue}
        alt=""
      />
      <div className="info-div">
        <div>
          <p className="productName-p text-info">{productName}</p>
          <p className="productPrice-p text-info">
            {formatPrice(productPrice)}
          </p>
        </div>
        <button className="buy-btn">Comprar</button>
      </div>
    </div>
  );
};
