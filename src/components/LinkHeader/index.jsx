/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from './styles.module.css'

export function LinkHeader({ url, children }) {
  return (
    <Link to={url} className={styles.link}>
      {children}
    </Link>
  );
}
