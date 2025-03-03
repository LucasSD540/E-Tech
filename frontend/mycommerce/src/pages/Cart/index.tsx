import React from "react";
import { RootState } from "../../store";
import { ProductCard } from "../../components/ProductCard";
import { useSelector } from "react-redux";
import * as S from "./styles";

export const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <S.CartDiv className="container">
      <div className="first-div">
        <div>
          <p className="myCart-p">Meu carrinho</p>
          <p className="myItems-p">{cartItems.length} itens no carrinho</p>
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
        <p className="sub-total-p">Subtotal: </p>
        <p className="freight-p">Frete: </p>
        <hr className="line" />
        <p className="total-p">Total: </p>
        <button className="finish-btn">Finalizar Compra</button>
      </div>
    </S.CartDiv>
  );
};
