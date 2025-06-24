import React, { useState } from "react";
import { RootState } from "../../store";
import { formatPrice } from "../../utils/formatPrice";
import { useNavigate } from "react-router-dom";
import { useIsAuthenticatedQuery } from "../../services/authApi";
import { ProductCard } from "../../components/ProductCard";
import { getSubTotal } from "../../store/slices/cartSlice";
import { useSelector } from "react-redux";
import { IMaskInput } from "react-imask";
import * as S from "./styles";
import { useCalculateShippingMutation } from "../../services/shippingApi";

export const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { data, isLoading } = useIsAuthenticatedQuery({});
  const [shipping] = useCalculateShippingMutation();
  const [cep, setCep] = useState("");
  const [shippingValue, setShippingValue] = useState(0);
  const [timeValue, setTimeValue] = useState(0);

  const subTotal = useSelector(getSubTotal);

  const total = shippingValue + subTotal;

  const formatCartItems = () => {
    return cartItems.map((item) => ({
      product: item.product.cardProductId,
      quantity: item.product.quantity,
    }));
  };

  const calculateShipping = async () => {
    if (!data && !isLoading) {
      navigate("/login");
    } else if (data) {
      try {
        const orderData = {
          items: formatCartItems(),
          cep_destino: cep,
        };

        const response = await shipping({
          orderData,
        }).unwrap();

        setShippingValue(response.valor_frete);
        setTimeValue(response.prazo_dias);
        localStorage.setItem("checkout_cep", cep);
        localStorage.setItem("checkout_time", response.prazo_dias.toString());
        localStorage.setItem(
          "checkout_shipping",
          response.valor_frete.toString()
        );
      } catch (err) {
        alert(`Não foi possível calcular o frete: ${err}`);
      }
    }
  };

  const handleGoToCheckout = () => {
    if (cartItems.length === 0) {
      alert("Seu carrinho está vazio.");
      return;
    }

    if (shippingValue === 0 || timeValue === 0) {
      alert("Por favor, calcule o frete antes de continuar.");
      return;
    }

    localStorage.setItem("checkout_cep", cep);
    localStorage.setItem("checkout_time", timeValue.toString());

    navigate("/delivery-address");
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
        {cartItems.map((item) => (
          <ProductCard
            key={item.product.cardProductId}
            product={item.product}
          />
        ))}
      </div>
      <div className="second-div">
        <p className="itemsResume-p">Resumo do pedido</p>
        <div className="label-input-div">
          <label className="input-label" htmlFor="">
            Calcular frete
          </label>
          <div>
            <IMaskInput
              className="cep-input"
              mask="00000-000"
              value={cep}
              onAccept={(value: any) => setCep(value)}
              placeholder="Digite seu CEP"
              id="cep"
            />
            <button className="cep-btn" onClick={calculateShipping}>
              Calcular
            </button>
          </div>
        </div>
        <p className="sub-total-p">Subtotal: {formatPrice(subTotal)}</p>
        <div className="freight-time-div">
          <p className="freight-p">Frete: {formatPrice(shippingValue)}</p>
          <p className="time-p">Prazo de entrega: {timeValue} dias úteis</p>
        </div>
        <hr className="line" />
        <p className="total-p">Total: {formatPrice(total)}</p>
        <button
          disabled={total > 0 ? false : true}
          className="finish-btn"
          onClick={handleGoToCheckout}
        >
          Finalizar Compra
        </button>
      </div>
    </S.CartDiv>
  );
};
