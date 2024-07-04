import { useFavoritoContext } from "../../contexto/favoritos";

import iconeFavoritar from "./favotirar.png";
import styles from "./styles.module.css";

export function Card({ id, capa, titulo }) {
  const { favorito, adicionarFavorito } = useFavoritoContext()

  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo}</h2>
      <img
        src={iconeFavoritar}
        alt="Favoritar filme"
        className={styles.favoritar}
      />
    </div>
  );
}
