import styles from "./styles.module.css";

// eslint-disable-next-line react/prop-types
export function Titulo({ children }) {
  return <div className={styles.texto}>{children}</div>;
}
