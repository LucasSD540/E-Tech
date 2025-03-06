import React, { useState } from "react";
import { ProductProps } from "../../components/Card";
import { formatPrice } from "../../utils/formatPrice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useFetchDetailProductQuery } from "../../services/productApi";
import { add } from "../../store/slices/cartSlice";
import * as S from "./styles";

const back = "assets/images/back_icon.png";

export const ProductDetail = () => {
  const [productQuantity, setProductQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productId = useSelector(
    (state: RootState) => state.productId.productId
  );

  const { data: productDetailData = [] } =
    useFetchDetailProductQuery(productId);

  const addItem = (product: ProductProps) => {
    const productWithQuantity = { ...product, quantity: productQuantity };
    dispatch(add({ product: productWithQuantity }));
    navigate("/cart");
  };

  return (
    <S.ProductDetailDiv className="container">
      <div className="back-div">
        <Link to="/" className="back-btn">
          <img src={back} alt="" />
          <p>Voltar</p>
        </Link>
      </div>
      <div className="info-div">
        <div className="div-1">
          <img src={productDetailData.image_url} alt="" />
          <p className="name-p">{productDetailData.name}</p>
          <div className="p-input-div">
            <p className="price-p">{formatPrice(productDetailData.price)}</p>
            <input
              onChange={(e) => setProductQuantity(Number(e.target.value))}
              className="quantity-input"
              type="number"
              name=""
              id=""
              min="1"
              value={productQuantity}
            />
          </div>
          <button
            className="buy-btn"
            onClick={() => addItem(productDetailData)}
          >
            Comprar
          </button>
        </div>
        <div className="div-2">
          <h5>Descrição do produto</h5>
          <p>{productDetailData.description}</p>
        </div>
      </div>
    </S.ProductDetailDiv>
  );
};
