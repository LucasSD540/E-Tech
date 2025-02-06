import { ProductCard } from "../../components/ProductCard";
import * as S from "./styles";

export const Cart = () => {
  return (
    <S.CartDiv className="container">
      <div className="first-div">
        <div>
          <p className="myCart-p">Meu carrinho</p>
          <p className="myItems-p">3 itens no carrinho</p>
        </div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
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
        <p className="sub-total-p">Subtotal: R$ 119,40</p>
        <p className="freight-p">Frete: R$ 13,80</p>
        <hr className="line" />
        <p className="total-p">Total: R$ 133,20</p>
        <button className="finish-btn">Finalizar Compra</button>
      </div>
    </S.CartDiv>
  );
};
