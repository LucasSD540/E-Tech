import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFetchDetailProductQuery } from "../../services/productApi";
import back from "../../assets/images/back_icon.png";
import * as S from "./styles";

export const ProductDetail = () => {
  const productId = useSelector((state) => state.productId.productId);

  const { data: productDetailData = [] } =
    useFetchDetailProductQuery(productId);

  const formatPrice = (preco = 0) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(preco);
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
          <div className="p-input-div">
            <p className="price-p">{formatPrice(productDetailData.price)}</p>
            <input
              className="quantity-input"
              type="number"
              name=""
              id=""
              min="1"
              defaultValue="1"
            />
          </div>
          <button className="buy-btn">Comprar</button>
        </div>
        <div className="div-2">
          <h5>Descrição do produto</h5>
          <p>{productDetailData.description}</p>
        </div>
      </div>
    </S.ProductDetailDiv>
  );
};
