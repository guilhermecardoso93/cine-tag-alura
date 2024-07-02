import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";

import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Link to="./">
        <img src={Logo} alt="Logo do Cine Tag" />
      </Link>
      <nav>

      </nav>
    </header>
  );
}
