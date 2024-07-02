import styles from "./styles.module.css";

export function Banner(imagem) {
  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url('/imagens/banner-${imagem}.png)` }}
    />
  );
}
