import React from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteAccountMutation } from "../../services/authApi";
import "./styles.css";

export const DeleteAccount = () => {
  const navigate = useNavigate();
  const [deleteAccount] = useDeleteAccountMutation();

  const handleDelete = async () => {
    try {
      await deleteAccount({}).unwrap();
      alert("Sua conta foi excluída com sucesso!");
      navigate("/");
      window.location.reload();
    } catch (err) {
      alert(`Não foi possível excluir sua conta: ${err}`);
    }
  };

  return (
    <div className="container">
      <h3 className="title-h3">Encerrar conta</h3>
      <div className="box-div flex">
        <p className="title-p">Encerrar conta</p>
        <p>Tem certeza que deseja encerrar sua conta?</p>
        <button onClick={handleDelete} className="confirm-btn">
          Encerrar conta
        </button>
        <button
          onClick={() => navigate("/edit-account")}
          className="confirm-btn blue-btn"
        >
          Voltar
        </button>
      </div>
    </div>
  );
};
