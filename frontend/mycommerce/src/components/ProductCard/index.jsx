import trash from "../../assets/images/trash.png";
import * as S from "./styles";

export const ProductCard = () => {
  return (
    <S.ProductCardDiv>
      <img className="img" src="https://placehold.co/140x100" alt="" />
      <div className="info-div">
        <div className="first-div">
          <p>Quantidade 2</p>
          <p>Preço total: R$ 39,80</p>
        </div>
        <div className="second-div">
          <p>Preço unitário: R$ 19,90</p>
          <div className="remove-div">
            <p>Remover item</p>
            <img src={trash} alt="" />
          </div>
        </div>
      </div>
    </S.ProductCardDiv>
  );
};
