import React from "react";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik, ErrorMessage } from "formik";
import {
  validationSchemaChangeInfo,
  validationSchemaChangePassword,
} from "../../utils/validationSchema";
import {
  useChangeInfoMutation,
  useChangePasswordMutation,
} from "../../services/authApi";
import "./styles.css";

export const EditAccount = () => {
  const navigate = useNavigate();
  const [changePassword] = useChangePasswordMutation();
  const [changeInfo] = useChangeInfoMutation();

  const handleChangeInfo = async (values: any, { resetForm }: any) => {
    const { first_name } = values;

    try {
      await changeInfo({ first_name }).unwrap();
      alert("Informações alteradas com sucesso!");
      navigate("/");
    } catch (err) {
      alert(`Não foi possível alterar as informações: ${err}`);
      resetForm();
    }
  };

  const handleChangePassword = async (values: any, { resetForm }: any) => {
    const { current_password, new_password, confirm_password } = values;

    try {
      await changePassword({
        current_password,
        new_password,
        confirm_password,
      }).unwrap();
      alert("Senha alterada com sucesso! Faça login novamente.");
      navigate("/login");
      window.location.reload();
    } catch (err) {
      alert(`Não foi possível alterar sua senha: ${err}`);
      resetForm();
    }
  };

  const confirmDelete = () => {
    navigate("/confirm-delete");
  };

  return (
    <div className="container section-container">
      <div className="account-div-1">
        <h3 className="section-title">Minha conta</h3>
        <p className="subTitle">Informações pessoais</p>
        <Formik
          initialValues={{
            first_name: "",
          }}
          onSubmit={handleChangeInfo}
          validationSchema={validationSchemaChangeInfo}
        >
          <Form>
            <Field
              name="first_name"
              type="text"
              placeholder="Nome"
              className="name-input btn-name"
            />
            <ErrorMessage
              name="first_name"
              component="div"
              className="error-message"
            />
            <button type="submit" className="btn-style btn-save">
              Salvar Informações
            </button>
          </Form>
        </Formik>
        <p className="subTitle close-account">Deseja encerrar sua conta?</p>
        <button onClick={confirmDelete} className="btn-close">
          Encerrar conta
        </button>
      </div>
      <div className="account-div-2">
        <Formik
          initialValues={{
            current_password: "",
            new_password: "",
            confirm_password: "",
          }}
          onSubmit={handleChangePassword}
          validationSchema={validationSchemaChangePassword}
        >
          <Form className="div-2-container">
            <div style={{ width: "100%", maxWidth: "300px" }}>
              <p className="subTitle">Alterar senha</p>

              <Field
                name="current_password"
                type="password"
                placeholder="Senha atual"
                className="name-input"
              />
              <ErrorMessage
                name="current_password"
                component="div"
                className="error-message"
              />
            </div>

            <Field
              name="new_password"
              type="password"
              placeholder="Nova senha"
              className="name-input"
              style={{ marginTop: "24px", marginBottom: "8px" }}
            />
            <ErrorMessage
              name="new_password"
              component="div"
              className="error-message"
            />

            <Field
              name="confirm_password"
              type="password"
              placeholder="Confirmar senha"
              className="name-input"
            />
            <ErrorMessage
              name="confirm_password"
              component="div"
              className="error-message"
            />

            <button
              type="submit"
              style={{ marginTop: "48px" }}
              className="btn-style"
            >
              Alterar senha
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
