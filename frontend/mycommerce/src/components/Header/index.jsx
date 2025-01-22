import * as S from "./styles";
import logo from "../../utils/images/logo.png";

export const Header = () => {
  return (
    <S.HeaderDiv>
      <div className="container">
        <img src={logo} alt="logo-image" />
        <nav>
          <li>Início</li>
          <li className="center">Entrar</li>
          <li>Carrinho</li>
        </nav>
      </div>
    </S.HeaderDiv>
  );
};
