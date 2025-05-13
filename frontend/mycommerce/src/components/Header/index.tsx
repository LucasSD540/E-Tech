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
import { useFetchCategoryQuery } from "../../services/categoryApi";
import { useFetchProductQuery } from "../../services/productApi";
import { clearFilter, updateFilter } from "../../store/slices/filteredSlice";
import * as S from "./styles";

const logo = "/assets/images/logo.png";

export const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [entry, setEntry] = useState(false);
  const [searchedValue, setSearchedValue] = useState("");
  const [logout] = useLogoutMutation();
  const { data: categories = [] } = useFetchCategoryQuery({});
  const { data: products = [] } = useFetchProductQuery({});

  const isAuth = useSelector((state: RootState) => state.isAuth.isAuth);
  const popUp = useSelector((state: RootState) => state.overlay.popUp);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  function refreshPage() {
    window.location.reload();
  }

  const handlePopUp = () => {
    dispatch(changePopUp(true));
    dispatch(changeOverlay(true));
  };

  const handleSearchSubmit = () => {
    dispatch(changeSearchOverlay(false));

    const term = searchedValue
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const matchedCategories = categories
      .filter((cat: any) =>
        cat.categoryName
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(term)
      )
      .map((cat: any) => cat.id);

    const matchedProducts = products
      .filter((prod: any) =>
        prod.productName
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(term)
      )
      .map((prod: any) => prod.id);

    dispatch(
      updateFilter({
        searchTerm: searchedValue,
        matchedCategoryIds: matchedCategories,
        matchedProductIds: matchedProducts,
      })
    );
  };

  const handleSearch = (e: any) => {
    dispatch(changeSearchOverlay(true));

    if (e.key === "Enter") {
      handleSearchSubmit();
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
        <Link
          onClick={() => dispatch(clearFilter())}
          className="img-link"
          to="/"
        >
          <img src={logo} alt="logo-image" />
        </Link>
        <input
          onKeyDown={(e: any) => handleSearch(e)}
          onClick={() => dispatch(changeSearchOverlay(true))}
          value={searchedValue}
          onChange={(e: any) => setSearchedValue(e.target.value)}
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
              isActive ? "active-link link-item cart" : "link-item cart"
            }
            to="/cart"
          >
            <div className="cartItemsNumber-div">{cartItems.length}</div>
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
