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

export function useFavoritosContext() {
  const { favorito, setFavorito } = useContext(FavoritosContext);

  function adicionarFavorito(novoFavorito) {
    const favoritosRepetido = favorito.some(item => item.id === novoFavorito.id);

    let novaLista = [...favorito];

    if(!favoritosRepetido) {
      novaLista.push(novoFavorito);

      return setFavorito(novaLista);
    }

    novaLista.splice(novaLista.indexOf(novoFavorito), 1)
  }
}
