import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const WideButton = () => {
  return (
    <Link to="/">
      <button className="return-btn">Voltar para a loja</button>
    </Link>
  );
};
