import React from "react";
import { Link } from "react-router-dom";
import { FavoriteCard } from "../../components/FavoriteCard";
import {
  useDeleteFavoriteMutation,
  useListFavoriteQuery,
} from "../../services/favoriteApi";
import "./styles.css";
import { useFetchProductQuery } from "../../services/productApi";

const back = "/assets/images/back_icon.png";

export const Favorites = () => {
  const { data: favorites = [], refetch: refetchFavorite } =
    useListFavoriteQuery({});
  const { data: products = [], refetch: refetchProduct } = useFetchProductQuery(
    {}
  );
  const [favoriteRemoveProduct] = useDeleteFavoriteMutation();

  const mappedFavorites = favorites
    .map((fav: any) => {
      const product = products.find((prod: any) => prod.id === fav.product);
      if (!product) return null;
      return {
        favoriteId: fav.id,
        product,
      };
    })
    .filter(Boolean);

  console.log(mappedFavorites);

  const removeFavorite = async (id: number) => {
    try {
      await favoriteRemoveProduct(id).unwrap();
      refetchFavorite();
      refetchProduct();
    } catch (err) {
      alert(`Não foi possível remover o favorito do produto: ${err}`);
    }
  };

  return (
    <div className="favorite-div container">
      <Link to="/" className="back-btn">
        <img src={back} alt="" />
        <p className="back-p">Voltar</p>
      </Link>
      <p className="items-p">Todos os itens ({favorites.length})</p>
      <hr className="favorite-line" />
      {favorites.length > 0 ? (
        <div className="favoriteCardList-div">
          {mappedFavorites.map((favObj: any) => {
            const { favoriteId, product } = favObj;

            return (
              <FavoriteCard
                key={favoriteId}
                id={favoriteId}
                image_url={product.image_url}
                productName={product.productName}
                productPrice={product.price}
                onRemoveFavorite={removeFavorite}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <p>Nenhum produto na lista</p>
        </div>
      )}
    </div>
  );
};
