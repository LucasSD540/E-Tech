import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFetchDetailProductQuery } from "../../services/productApi";
import back from "../../assets/images/back_icon.png";

export const ProductDetail = () => {
  const productId = useSelector((state) => state.productId.productId);

  const { data: productDetailData = [] } =
    useFetchDetailProductQuery(productId);

  return (
    <div>
      <div className="div-1">
        <Link to="/" className="back-btn">
          <img src={back} alt="" />
          <p>Voltar</p>
        </Link>
        <img src={productDetailData.image_url} alt="" />
        <div>
          <p>R$ {productDetailData.price}</p>
          <input type="number" name="" id="" />
        </div>
        <button>Comprar</button>
      </div>
      <div className="div-2">
        <h5>Descrição do produto</h5>
        <p>{productDetailData.description}</p>
      </div>
    </div>
  );
};
