import React from "react";
import { ProductItem } from "../Card";
import { remove } from "../../store/slices/cartSlice";
import * as S from "./styles";
import { useDispatch } from "react-redux";

const trash = "assets/images/trash.png";

export const ProductCard = ({ product }: ProductItem) => {
  const dispatch = useDispatch();

  const removeItem = () => dispatch(remove(product.cardProductId));

  const total = Number((product.quantity * product.price).toFixed(2));

  const formatPrice = (total = 0) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(total);
  };

  return (
    <S.ProductCardDiv>
      <img className="img" src={product.image_url} alt="" />
      <div className="info-div">
        <div className="first-div">
          <p>Quantidade: {product.quantity}</p>
          <p>Produto: {product.productName}</p>
        </div>
        <div className="second-div">
          <p>Valor total: {formatPrice(total)}</p>
          <div onClick={removeItem} className="remove-div">
            <p>Remover item</p>
            <img src={trash} alt="" />
          </div>
        </div>
      </div>
    </S.ProductCardDiv>
  );
};
