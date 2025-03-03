import React from "react";
import { ProductItem } from "../Card";
import { remove } from "../../store/slices/cartSlice";
import * as S from "./styles";
import { useDispatch } from "react-redux";

const trash = "assets/images/trash.png";

export const ProductCard = ({ product }: ProductItem) => {
  const dispatch = useDispatch();

  const removeItem = () => dispatch(remove(product.cardProductId));

  return (
    <S.ProductCardDiv>
      <img className="img" src={product.image_url} alt="" />
      <div className="info-div">
        <div className="first-div">
          <p>Quantidade </p>
          <p>Preço total: </p>
        </div>
        <div className="second-div">
          <p>Preço unitário: {product.price}</p>
          <div onClick={removeItem} className="remove-div">
            <p>Remover item</p>
            <img src={trash} alt="" />
          </div>
        </div>
      </div>
    </S.ProductCardDiv>
  );
};
