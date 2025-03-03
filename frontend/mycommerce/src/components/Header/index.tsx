import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../services/authApi";
import * as S from "./styles";

const logo = "assets/images/logo.png";

export const Header = () => {
  const [entry, setEntry] = useState(false);
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
          <li className={`${entry ? "active-link" : ""} link-item center`}>
            <NavLink className="link-item" to="/login">
              Entrar
            </NavLink>
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

export const AuthHeader = () => {
  const [popUp, setPopUp] = useState(false);
  const [entry, setEntry] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();

  const handlePopUp = () => {
    setPopUp(!popUp);
  };

  const handleLogout = async () => {
    try {
      await logout(undefined).unwrap();
      alert("Saiu da conta!");
      navigate("/");
    } catch (err) {
      alert("Não foi possível sair da conta!");
    }
  };

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

  return (
    <S.HeaderDiv>
      <div className="container">
        <Link to="/userHome">
          <img src={logo} alt="logo-image" />
        </Link>
        <nav>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link link-item" : "link-item"
            }
            to="/userHome"
          >
            Início
          </NavLink>
          <li className={`${entry ? "active-link" : ""} link-item center`}>
            <p onClick={() => handlePopUp()}>Conta</p>
            {popUp && (
              <div className="popUp-div">
                <p className="link-item first">
                  <NavLink className="link" to="/account-detail">
                    Dados da conta
                  </NavLink>
                </p>
                <p onClick={handleLogout} className="link-item second">
                  <NavLink className="link" to="/">
                    Sair da conta
                  </NavLink>
                </p>
              </div>
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
