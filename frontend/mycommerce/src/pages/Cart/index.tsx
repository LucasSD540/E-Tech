import React from "react";
import { RootState } from "../../store";
import { useCheckoutMutation } from "../../services/checkoutApi";
import { formatPrice } from "../../utils/formatPrice";
import { useNavigate } from "react-router-dom";
import { useIsAuthenticatedQuery } from "../../services/authApi";
import { ProductCard } from "../../components/ProductCard";
import { getSubTotal } from "../../store/slices/cartSlice";
import { useSelector } from "react-redux";
import * as S from "./styles";

export const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { data, isLoading } = useIsAuthenticatedQuery({});
  const [checkout] = useCheckoutMutation();

  const shippingValue = 0;

  const subTotal = useSelector(getSubTotal);

  const total = shippingValue + subTotal;

  const handleCheckout = async () => {
    if (!data && !isLoading) {
      navigate("/login");
    } else if (data) {
      try {
        const formattedItems = cartItems.map((item) => ({
          product_id: item.product.cardProductId,
          quantity: item.product.quantity,
        }));

        console.log(formattedItems);

        const response = await checkout({
          items: formattedItems,
        }).unwrap();
        if (response.checkout_url) {
          window.location.href = response.checkout_url;
        } else {
          alert("Erro ao criar sessão de pagamento!");
        }
      } catch (err) {
        console.log("Erro ao finalizar compra: ", err);
      }
    }
  };

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
        <p className="freight-p">Frete: {formatPrice(shippingValue)}</p>
        <hr className="line" />
        <p className="total-p">Total: {formatPrice(total)}</p>
        <button
          disabled={total > 0 ? false : true}
          className="finish-btn"
          onClick={handleCheckout}
        >
          Finalizar Compra
        </button>
      </div>
    </S.CartDiv>
  );
};
