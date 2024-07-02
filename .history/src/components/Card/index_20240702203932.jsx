/* eslint-disable react/prop-types */
import iconeFavoritar from "./favotirar.png";
import styles from "./styles.module.css";

export function Card({ id, capa, titulo }) {
  return (
    <div className={styles.container} key={id}>
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
