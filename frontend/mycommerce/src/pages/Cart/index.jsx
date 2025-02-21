import { ProductCard } from "../../components/ProductCard";
import * as S from "./styles";

export const Cart = ({ items, totalPrice, freight, total }) => {
  return (
    <S.CartDiv className="container">
      <div className="first-div">
        <div>
          <p className="myCart-p">Meu carrinho</p>
          <p className="myItems-p">{items} itens no carrinho</p>
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
        <p className="sub-total-p">Subtotal: {totalPrice}</p>
        <p className="freight-p">Frete: {freight}</p>
        <hr className="line" />
        <p className="total-p">Total: {total}</p>
        <button className="finish-btn">Finalizar Compra</button>
      </div>
    </S.CartDiv>
  );
};
