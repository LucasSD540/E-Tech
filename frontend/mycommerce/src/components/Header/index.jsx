import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLogoutMutation } from "../../services/authApi";
import { changeIsAuth } from "../../store/slices/loginSlice";
import logo from "../../assets/images/logo.png";
import * as S from "./styles";

export const Header = () => {
  const [popUp, setPopUp] = useState(false);
  const [entry, setEntry] = useState(false);
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const location = useLocation();

  const isAuth = useSelector((state) => state.isAuth.isAuth);

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

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      alert("Saiu da conta!");
      dispatch(changeIsAuth(false));
    } catch (err) {
      alert("Não foi possível sair da conta!");
    }
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
            {isAuth ? (
              <>
                <p>Conta</p>
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
