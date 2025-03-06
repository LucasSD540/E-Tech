import React from "react";
import { RootState } from "../../store";
import { formatPrice } from "../../utils/formatPrice";
import { ProductCard } from "../../components/ProductCard";
import { getSubTotal } from "../../store/slices/cartSlice";
import { useSelector } from "react-redux";
import * as S from "./styles";

export const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const subTotal = useSelector(getSubTotal);

  return (
    <S.CartDiv className="container">
      <div className="first-div">
        <div>
          <p className="myCart-p">Meu carrinho</p>
          <p className="myItems-p">
            {cartItems.length}{" "}
            {cartItems.length !== 1 ? "itens no carrinho" : "item no carrinho"}
          </p>
        </div>
        {cartItems.map((item, index) => (
          <ProductCard key={index} product={item.product} />
        ))}
      </div>
      <div className="second-div">
        <p className="itemsResume-p">Resumo do pedido</p>
        <div className="label-input-div">
          <label className="input-label" htmlFor="">
            Calcular frete
          </label>
          <input
            className="cep-input"
            type="text"
            placeholder="Digite seu CEP"
          />
        </div>
        <p className="sub-total-p">Subtotal: {formatPrice(subTotal)}</p>
        <p className="freight-p">Frete: </p>
        <hr className="line" />
        <p className="total-p">Total: </p>
        <button className="finish-btn">Finalizar Compra</button>
      </div>
    </S.CartDiv>
  );
};
