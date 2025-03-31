import React, { useState } from "react";
import "./styles.css";
import { useSendEmailMutation } from "../../services/resetPassword";

export const SendEmail = () => {
  const [email, setEmail] = useState("");
  const [sendEmail] = useSendEmailMutation();

  const handleEmailSend = async (e: any) => {
    e.preventDefault();

    try {
      await sendEmail({ email }).unwrap();
      alert("E-mail enviado com sucesso!");
    } catch (err) {
      alert(`Erro ao enviar o e-mail: ${err}`);
    }
  };

  return (
    <div className="container email-container">
      <h3 className="title-h3">E-mail de recuperação de senha</h3>
      <div className="box-div">
        <form className="box-form" onSubmit={handleEmailSend}>
          <h3 className="box-title-h3">Digite o e-mail da conta</h3>
          <input
            placeholder="E-mail de recuperação de senha"
            className="email-reset-input"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="save-btn">
            Enviar e-mail
          </button>
        </form>
      </div>
    </div>
  );
};
