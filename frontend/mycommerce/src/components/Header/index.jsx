import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import * as S from "./styles";

export const Header = () => {
  const [popUp, setPopUp] = useState(false);
  const [entry, setEntry] = useState(false);

  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);

  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname.includes("account-detail") ||
      location.pathname.includes("login")
    ) {
      setEntry(true);
    } else {
      setEntry(false);
    }
  }, [location.pathname]);

  const handlePopUp = () => {
    setPopUp(!popUp);
  };

  return (
    <S.HeaderDiv>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo-image" />
        </Link>
        <nav>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link link-item" : "link-item"
            }
            to="/"
          >
            Início
          </NavLink>
          <li
            className={`${entry ? "active-link" : ""} link-item center`}
            onClick={() => handlePopUp()}
          >
            {isLoggedIn ? (
              <>
                <p>Conta</p>
                {popUp && (
                  <div className="popUp-div">
                    <li className="link-item first">
                      <NavLink className="link" to="/account-detail">
                        Dados da conta
                      </NavLink>
                    </li>
                    <li className="link-item second">
                      <NavLink className="link" to="/">
                        Sair da conta
                      </NavLink>
                    </li>
                  </div>
                )}
              </>
            ) : (
              <NavLink className="link-item" to="/login">
                Entrar
              </NavLink>
            )}
          </li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link link-item" : "link-item"
            }
            to="/cart"
          >
            Carrinho
          </NavLink>
        </nav>
      </div>
    </S.HeaderDiv>
  );
};
