import React, { useState } from "react";
import { useIsAuthenticatedQuery } from "../../services/authApi";
import { useCheckoutMutation } from "../../services/checkoutApi";
import { ProductProps } from "../../components/Card";
import { formatPrice } from "../../utils/formatPrice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useFetchDetailProductQuery } from "../../services/productApi";
import { add } from "../../store/slices/cartSlice";
import * as S from "./styles";

const back = "/assets/images/back_icon.png";

export const ProductDetail = () => {
  let [productQuantity, setProductQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading } = useIsAuthenticatedQuery({});
  const [checkout] = useCheckoutMutation();

  const productId = useSelector(
    (state: RootState) => state.productId.productId
  );

  const { data: productDetailData = [] } =
    useFetchDetailProductQuery(productId);

  const increaseQuantity = () => {
    productQuantity < 10 && setProductQuantity((productQuantity += 1));
  };

  const decreaseQuantity = () => {
    productQuantity > 1 && setProductQuantity((productQuantity -= 1));
  };

  const addItem = (product: ProductProps) => {
    const productWithQuantity = { ...product, quantity: productQuantity };
    dispatch(add({ product: productWithQuantity }));
    navigate("/cart");
  };

  const handleCheckout = async () => {
    if (!data && !isLoading) {
      navigate("/login");
    } else if (data) {
      try {
        const formattedItem = {
          name: productDetailData.productName,
          price: Math.round(Number(productDetailData.price) * 100),
          quantity: productQuantity,
        };

        const response = await checkout({ items: [formattedItem] }).unwrap();
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
    <S.ProductDetailDiv className="container">
      <div className="up-div">
        <div className="back-div">
          <Link to="/" className="back-btn">
            <img src={back} alt="" />
            <p>Voltar para a loja</p>
          </Link>
        </div>
        <div className="info-div">
          <div className="div-1">
            <img src={productDetailData.image_url} alt="" />
          </div>
          <div className="div-2">
            <h4 className="name-p">{productDetailData.productName}</h4>
            <div className="shipping-div flex-div">
              <input
                className="cep-input"
                type="text"
                placeholder="Digite seu CEP"
              />
              <button className="calc-btn">Calcular</button>
            </div>
            <div className="quantity-div flex-div">
              <div className="quantity-input-div">
                <button onClick={increaseQuantity}>+</button>
                <p>{productQuantity}</p>
                <button onClick={decreaseQuantity}>-</button>
              </div>
              <p className="price-p">{formatPrice(productDetailData.price)}</p>
            </div>
            <button
              className="btn add-btn"
              onClick={() => addItem(productDetailData)}
            >
              Adicionar ao Carrinho
            </button>
            <button className="btn buy-btn" onClick={handleCheckout}>
              Comprar
            </button>
          </div>
        </div>
      </div>
      <h5>Descrição do produto</h5>
      <p>{productDetailData.description}</p>
    </S.ProductDetailDiv>
  );
};
