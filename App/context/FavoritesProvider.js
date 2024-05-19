import { useState } from "react";

import FavoritesContext from "./FavoritesContext";

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (product) => {
    const productInFavorites = favorites.some((item) => item.id === product.id);
    if (productInFavorites) {
      setFavorites(favorites.filter((item) => item.id !== product.id));
    } else {
      setFavorites((prev) => [...prev, product]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
