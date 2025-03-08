import React from "react";
import "./styles.css";
import { WideButton } from "../../components/WideButton";

export const Success = () => {
  return (
    <div className="container success-page">
      <p className="page-title">Pagamento confirmado</p>
      <div className="box">
        <h3 className="top-text">Parabéns</h3>
        <p className="middle-text">
          Seu pagamento foi aprovado, você receberá um e-mail com as informações
          relacionadas ao pedido.
        </p>
        <WideButton />
      </div>
    </div>
  );
};
