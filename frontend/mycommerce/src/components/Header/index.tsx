import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeIsAuth } from "../../store/slices/loginSlice";
import {
  changeOverlay,
  changePopUp,
  changeSearchOverlay,
} from "../../store/slices/overlaySlice";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../services/authApi";
import { RootState } from "../../store";
import * as S from "./styles";

const logo = "/assets/images/logo.png";

export const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [entry, setEntry] = useState(false);
  const [logout] = useLogoutMutation();

  const isAuth = useSelector((state: RootState) => state.isAuth.isAuth);
  const popUp = useSelector((state: RootState) => state.overlay.popUp);

  function refreshPage() {
    window.location.reload();
  }

  const handlePopUp = () => {
    dispatch(changePopUp(true));
    dispatch(changeOverlay(true));
  };

  const handleSearch = () => {
    dispatch(changeSearchOverlay(true));
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

  const handleLogout = async () => {
    try {
      await logout(undefined).unwrap();
      alert("Saiu da conta!");
      dispatch(changePopUp(false));
      navigate("/");
      dispatch(changeIsAuth(false));
      refreshPage();
    } catch (err) {
      alert("Não foi possível sair da conta!");
      dispatch(changePopUp(false));
    }
  };

  return (
    <S.HeaderDiv>
      <div className="container">
        <Link className="img-link" to="/">
          <img src={logo} alt="logo-image" />
        </Link>
        <input
          onClick={handleSearch}
          placeholder="O que você procura?"
          className="header-input"
          type="text"
        />
        <nav>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link link-item" : "link-item"
            }
            to="/"
          >
            Início
          </NavLink>
          {isAuth ? (
            <li className={`${entry ? "active-link" : ""} link-item`}>
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
          ) : (
            <li className={`${entry ? "active-link" : ""} link-item`}>
              <NavLink className="link-item" to="/login">
                Entrar
              </NavLink>
            </li>
          )}
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link link-item" : "link-item"
            }
            to="/cart"
          >
            Carrinho
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link link-item" : "link-item"
            }
            to="/favorites"
          >
            Favoritos
          </NavLink>
        </nav>
      </div>
    </S.HeaderDiv>
  );
};
