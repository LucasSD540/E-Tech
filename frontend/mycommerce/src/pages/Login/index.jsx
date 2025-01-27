import { Link } from "react-router-dom";
import back from "../../assets/images/back_icon.png";
import * as S from "./styles";

export const Login = () => {
  return (
    <S.LoginDiv className="container">
      <div className="div-1">
        <Link to="/" className="back-btn">
          <img src={back} alt="" />
          <p>Voltar</p>
        </Link>
        <p className="title">Bem vindo de volta!</p>
        <input className="styled-input" type="text" placeholder="E-mail" />
        <input
          className="styled-input password"
          type="text"
          placeholder="Senha"
        />
        <p className="forgot-link">Esqueceu sua senha?</p>
        <button className="styled-btn">Entrar</button>
      </div>
      <div className="div-2">
        <div className="title-div">
          <p className="title">Novo por aqui?</p>
        </div>
        <input
          className="styled-input"
          type="text"
          placeholder="Nome completo"
        />
        <input className="styled-input" type="text" placeholder="E-mail" />
        <input className="styled-input" type="text" placeholder="Senha" />
        <input
          className="styled-input"
          type="text"
          placeholder="Confirmar senha"
        />
        <button className="styled-btn">Cadastrar</button>
      </div>
    </S.LoginDiv>
  );
};
