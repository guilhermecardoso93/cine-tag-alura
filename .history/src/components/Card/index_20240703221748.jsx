import { useFavoritoContext } from "../../contexto/favoritos";

import iconeFavoritar from "./favotirar.png";
import iconeDesfavoritar from "./desfavotirar.png";
import styles from "./styles.module.css";

export function Card({ id, capa, titulo }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((favorito) => fav.id === id);
  const icone = ehFavorito ? iconeFavoritar : iconeDesfavoritar ;

  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo}</h2>
      <img
        src={icone}
        alt="Favoritar filme"
        className={styles.favoritar}
        onClick={() => {
          adicionarFavorito({ id, titulo, capa });
        }}
      />
    </div>
  );
}
