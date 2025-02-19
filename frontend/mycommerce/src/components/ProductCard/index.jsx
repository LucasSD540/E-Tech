import trash from "../../assets/images/trash.png";
import * as S from "./styles";

export const ProductCard = ({ quantity, totalPrice, price }) => {
  return (
    <S.ProductCardDiv>
      <img className="img" src="https://placehold.co/140x100" alt="" />
      <div className="info-div">
        <div className="first-div">
          <p>Quantidade {quantity}</p>
          <p>Preço total: {totalPrice}</p>
        </div>
        <div className="second-div">
          <p>Preço unitário: {price}</p>
          <div className="remove-div">
            <p>Remover item</p>
            <img src={trash} alt="" />
          </div>
        </div>
      </div>
    </S.ProductCardDiv>
  );
};
