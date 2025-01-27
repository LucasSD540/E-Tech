import security from "../../assets/images/security.png";
import note from "../../assets/images/note.png";
import telephone from "../../assets/images/telephone.png";
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.FooterDiv>
      <div className="container">
        <nav>
          <li>
            <img src={security} alt="security-logo" />
            <p>Política de privacidade</p>
          </li>
          <li>
            <img src={note} alt="note-logo" />
            <p>Termos de uso</p>
          </li>
          <li>
            <img src={telephone} alt="telephone-logo" />
            <p>Contato</p>
          </li>
        </nav>
        <p className="copy-info">
          &copy; 2025 MyCommerce. Todos os direitos reservados.
        </p>
        <p className="dev-info">
          Desenvolvido por Lucas:
          https://www.linkedin.com/in/lucas-souza-duarte/
        </p>
      </div>
    </S.FooterDiv>
  );
};
