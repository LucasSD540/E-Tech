import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeIsLoggedIn } from "../../store/slices/loginSlice";
import { useLoginMutation } from "../../services/authApi";
import back from "../../assets/images/back_icon.png";
import * as S from "./styles";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const [login] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password }).unwrap();
      alert("Login realizado com sucesso!");
      dispatch(changeIsLoggedIn(true));
    } catch (err) {
      alert("Erro ao fazer login!");
    }
  };

  return (
    <S.LoginDiv className="container">
      <div className="div-1">
        <Link to="/" className="back-btn">
          <img src={back} alt="" />
          <p>Voltar</p>
        </Link>
        <p className="title">Bem vindo de volta!</p>
        <form onSubmit={handleLogin}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="styled-input"
            type="text"
            placeholder="E-mail"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="styled-input password"
            type="text"
            placeholder="Senha"
          />
          <p className="forgot-link">Esqueceu sua senha?</p>
          <button type="submit" className="styled-btn">
            Entrar
          </button>
        </form>
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
