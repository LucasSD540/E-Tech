import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { validationSchemaChangePassword } from "../../utils/validationSchema";
import {
  useDeleteAccountMutation,
  useChangePasswordMutation,
} from "../../services/authApi";
import { changeIsAuth } from "../../store/slices/loginSlice";
import "./styles.css";

export const EditAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deleteAccount] = useDeleteAccountMutation();
  const [changePassword] = useChangePasswordMutation();

  const handleDelete = async () => {
    try {
      await deleteAccount({}).unwrap();
      alert("Sua conta foi excluída com sucesso!");
      navigate("/");
      dispatch(changeIsAuth(false));
      window.location.reload();
    } catch (err) {
      alert(`Não foi possível excluir sua conta: ${err}`);
    }
  };

  const handleChangePassword = async (values: any, { resetForm }: any) => {
    const { current_password, new_password, confirm_password } = values;

    console.log(values);

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

  return (
    <div className="container section-container">
      <div className="account-div-1">
        <h3 className="section-title">Minha conta</h3>
        <p className="subTitle">Informações pessoais</p>
        <input className="name-input btn-name" type="text" placeholder="Nome" />
        <button className="btn-style btn-save">Salvar Informações</button>
        <p className="subTitle close-account">Deseja encerrar sua conta?</p>
        <button onClick={handleDelete} className="btn-close">
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
