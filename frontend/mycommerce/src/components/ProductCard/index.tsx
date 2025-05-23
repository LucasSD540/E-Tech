import React from "react";
import { ProductItem } from "../Card";
import {
  remove,
  increaseQuantity,
  decreaseQuantity,
} from "../../store/slices/cartSlice";
import { formatProductName } from "../../utils/formatProductName";
import { formatPrice } from "../../utils/formatPrice";
import * as S from "./styles";
import { useDispatch } from "react-redux";

const trash = "/assets/images/trash.png";

export const ProductCard = ({ product }: ProductItem) => {
  const dispatch = useDispatch();

  const removeItem = () => dispatch(remove(product.cardProductId));
  const increaseItem = () => dispatch(increaseQuantity(product.cardProductId));
  const decreaseItem = () => dispatch(decreaseQuantity(product.cardProductId));

  const total = Number((product.quantity * product.price).toFixed(2));

  return (
    <S.ProductCardDiv>
      <img className="img" src={product.image_url} alt="" />
      <div className="info-div">
        <div className="first-div">
          <p className="product-name">
            {formatProductName(product.productName)}
          </p>
          <p>
            Quantidade: {product.quantity}
            <span className="increase" onClick={increaseItem}>
              +
            </span>
            <span className="decrease" onClick={decreaseItem}>
              -
            </span>
          </p>
          <p>Valor unitário: {formatPrice(product.price)}</p>
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
