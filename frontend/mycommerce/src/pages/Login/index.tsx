import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik, ErrorMessage } from "formik";
import {
  validationSchemaLogin,
  validationSchemaRegister,
} from "../../utils/validationSchema";
import { useLoginMutation, useRegisterMutation } from "../../services/authApi";
import * as S from "./styles";

const back = "/assets/images/back_icon.png";

export const Login = () => {
  const navigate = useNavigate();

  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();

  const handleLogin = async (values: any, { resetForm }: any) => {
    const { email, password } = values;

    try {
      await login({ email, password }).unwrap();
      navigate("/");
    } catch (err) {
      alert(`Erro ao fazer login: ${err}`);
      resetForm();
    }
  };

  const handleRegister = async (values: any, { resetForm }: any) => {
    const { first_name, last_name, email, password } = values;

    try {
      await register({ first_name, last_name, email, password }).unwrap();
    } catch (err: any) {
      if (err.status === 400 && err.data?.email) {
        alert("Este e-mail já está em uso. Tente outro.");
      } else {
        alert("Erro ao fazer cadastro! Verifique os dados e tente novamente.");
        resetForm();
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
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleLogin}
          validationSchema={validationSchemaLogin}
        >
          <Form>
            <div>
              <Field
                name="email"
                className="styled-input"
                type="text"
                placeholder="E-mail"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>
            <div>
              <Field
                name="password"
                className="styled-input password"
                type="password"
                placeholder="Senha"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>
            <Link to="/send-email">
              <p className="forgot-link">Esqueceu sua senha?</p>
            </Link>
            <button type="submit" className="styled-btn">
              Entrar
            </button>
          </Form>
        </Formik>
      </div>
      <div className="div-2">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={handleRegister}
          validationSchema={validationSchemaRegister}
        >
          <Form>
            <div className="title-div">
              <p className="title">Novo por aqui?</p>
            </div>
            <div>
              <Field
                name="firstName"
                className="styled-input"
                type="text"
                placeholder="Nome"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="error-message"
              />
            </div>
            <div>
              <Field
                name="lastName"
                className="styled-input"
                type="text"
                placeholder="Sobrenome"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="error-message"
              />
            </div>
            <div>
              <Field
                name="email"
                className="styled-input"
                type="text"
                placeholder="E-mail"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>
            <div>
              <Field
                name="password"
                className="styled-input"
                type="password"
                placeholder="Senha"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>
            <div>
              <Field
                name="confirmPassword"
                className="styled-input"
                type="password"
                placeholder="Confirmar senha"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error-message"
              />
            </div>
            <button type="submit" className="styled-btn">
              Cadastrar
            </button>
          </Form>
        </Formik>
      </div>
    </S.LoginDiv>
  );
};
