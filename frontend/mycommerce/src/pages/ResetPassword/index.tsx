import React, { useState } from "react";
import { useConfirmResetMutation } from "../../services/resetPassword";
import { useParams } from "react-router-dom";

export const ResetPassword = () => {
  const { uid, token } = useParams();
  const [new_password, setNew_password] = useState("");
  const [resetPassword] = useConfirmResetMutation();

  const handleResetPassword = async (e: any) => {
    e.preventDefault();

    try {
      await resetPassword({ uid, token, new_password }).unwrap();
      alert("Senha alterada com sucesso!");
    } catch (err) {
      alert(`Erro ao redefinir senha: ${err}`);
    }
  };

  return (
    <div className="container">
      <h3>Redefinição de senha</h3>
      <div className="box-div">
        <h2>Crie sua nova senha</h2>
        <form onSubmit={handleResetPassword}>
          <input
            onChange={(e) => setNew_password(e.target.value)}
            placeholder="Nova senha"
            type="password"
          />
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
};
