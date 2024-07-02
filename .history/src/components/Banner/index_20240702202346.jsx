import styles from "./styles.module.css";

import img from '../../assets/imagens/'

// eslint-disable-next-line react/prop-types
export function Banner({imagem}) {
  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url('/imagens/banner-${imagem}.png)` }}
    />
  );
}
