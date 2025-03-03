import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation, useRegisterMutation } from "../../services/authApi";
import * as S from "./styles";

const back = "assets/images/back_icon.png";

export const Login = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      await login({ email, password }).unwrap();
      navigate("/userHome");
    } catch (err) {
      alert("Erro ao fazer login!");
    }
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    try {
      await register({ first_name, last_name, email, password }).unwrap();
    } catch (err: any) {
      if (err.status === 400 && err.data?.email) {
        alert("Este e-mail já está em uso. Tente outro.");
      } else {
        alert("Erro ao fazer cadastro! Verifique os dados e tente novamente.");
      }
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
            type="password"
            placeholder="Senha"
          />
          <p className="forgot-link">Esqueceu sua senha?</p>
          <button type="submit" className="styled-btn">
            Entrar
          </button>
        </form>
      </div>
      <div className="div-2">
        <form onSubmit={handleRegister}>
          <div className="title-div">
            <p className="title">Novo por aqui?</p>
          </div>
          <input
            onChange={(e) => setFirst_name(e.target.value)}
            className="styled-input"
            type="text"
            placeholder="Nome"
          />
          <input
            onChange={(e) => setLast_name(e.target.value)}
            className="styled-input"
            type="text"
            placeholder="Sobrenome"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="styled-input"
            type="text"
            placeholder="E-mail"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="styled-input"
            type="password"
            placeholder="Senha"
          />
          <input
            className="styled-input"
            type="password"
            placeholder="Confirmar senha"
          />
          <button type="submit" className="styled-btn">
            Cadastrar
          </button>
        </form>
      </div>
    </S.LoginDiv>
  );
};
