import React, { useState } from "react";
import { formatPrice } from "../../utils/formatPrice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useFetchDetailProductQuery } from "../../services/productApi";
import { add, removeById } from "../../store/slices/cartSlice";
import { ProductProps } from "../../components/Card";
import * as S from "./styles";

const back = "/assets/images/back_icon.png";

export const ProductDetail = () => {
  let [productQuantity, setProductQuantity] = useState(1);
  const dispatch = useDispatch();

  const id = useSelector((state: RootState) => state.productId.productId);

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const isInCart = cartItems.some((item) => item.product.id === id);

  const { data: productDetailData } = useFetchDetailProductQuery(id);

  const increaseQuantity = () => {
    productQuantity < 10 && setProductQuantity((productQuantity += 1));
  };

  const decreaseQuantity = () => {
    productQuantity > 1 && setProductQuantity((productQuantity -= 1));
  };

  const addItem = (product: ProductProps) => {
    const productWithQuantity = { ...product, quantity: productQuantity };
    console.log("Produto adicionado ao carrinho:", productWithQuantity);
    dispatch(add({ product: productWithQuantity }));
  };

  const removeItem = (id: number) => {
    console.log("Item a ser removido: ", id);
    dispatch(removeById(id));
  };

  if (!productDetailData) {
    return <p>Carregando produto...</p>;
  }

  return (
    <S.ProductDetailDiv className="container">
      <div className="up-div">
        <div className="back-div">
          <Link to="/" className="back-btn">
            <img src={back} alt="" />
            <p>Voltar</p>
          </Link>
        </div>
        <div className="product-info-div">
          <div className="div-1">
            <img src={productDetailData.image_url} alt="" />
            <h4 className="name-p">{productDetailData.productName}</h4>
            <div className="flex-div">
              <p className="price-p">
                {formatPrice(productDetailData.price * productQuantity)}
              </p>
              <div className="quantity-input-div">
                <button onClick={increaseQuantity}>+</button>
                <p>{productQuantity}</p>
                <button onClick={decreaseQuantity}>-</button>
              </div>
            </div>
            <button
              className="btn buy-btn"
              onClick={
                isInCart
                  ? () => removeItem(id)
                  : () => addItem(productDetailData)
              }
            >
              {isInCart ? "Remover" : "Adicionar"}
            </button>
          </div>
          <div className="div-2">
            <h5 className="desc-h5">Descrição do produto</h5>
            <p>{productDetailData.description}</p>
            <h3 className="product-info-h3">
              Performance do produto nas seguintes categorias
            </h3>
            <div className="flex-div task-div">
              <p className="task-p">Atividade 1</p>
              <S.BaseProgressBar>
                <S.FilledProgressBar percentage={95} />
              </S.BaseProgressBar>
            </div>
            <div className="flex-div task-div">
              <p className="task-p">Atividade 2</p>
              <S.BaseProgressBar>
                <S.FilledProgressBar percentage={50} />
              </S.BaseProgressBar>
            </div>
            <div className="flex-div task-div">
              <p className="task-p">Atividade 3</p>
              <S.BaseProgressBar>
                <S.FilledProgressBar percentage={90} />
              </S.BaseProgressBar>
            </div>
            <div className="flex-div task-div">
              <p className="task-p">Atividade 4</p>
              <S.BaseProgressBar>
                <S.FilledProgressBar percentage={87} />
              </S.BaseProgressBar>
            </div>
          </div>
        </div>
      </div>
    </S.ProductDetailDiv>
  );
};
