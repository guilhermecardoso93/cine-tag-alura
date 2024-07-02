import styles from "./styles.module.css";

// eslint-disable-next-line react/prop-types
export function Banner({imagem}) {
  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url('../../assets/imagens/banner-${imagem}.png)` }}
    />
  );
}
