import { createContext, useState } from "react";

export const FavoritosContext = createContext();

FavoritosContext.displayName = "Favoritos";

export function FavoritosProvider({ children }) {
  const [favorito, setFavoritos] = useState([]);

  return (
    <FavoritosContext.Provider value={{ favorito, setFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
}
