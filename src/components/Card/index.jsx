/* eslint-disable react/prop-types */
import iconeFavoritar from "./favotirar.png";
import styles from "./styles.module.css";

// eslint-disable-next-line no-unused-vars
export function Card({ id, capa, titulo }) {
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
