import React from 'react';
import styles from '../styles/header.module.css';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarHeader}>
        <ul className={styles.navbarSecond}>
          <img className={styles.logoNav} src='https://img.freepik.com/vetores-premium/design-de-logotipo-de-loja-de-moda-na-cor-marrom-na-ilustracao-vetorial-de-fundo-branco_500223-967.jpg' />
        </ul>
        <ul className={styles.navbarMenu}>
          <li className={styles.navbarLi}>
            <Link className={styles.navLink} to="/cadastro">
              Cadastro
            </Link>
          </li>
          <li className={styles.navbarLi}>
            <Link className={styles.navLink} to="/alterar/:id">
              Alterar
            </Link>
          </li>
        </ul>
        <div className={styles.search}>
          <input type="text" placeholder="Buscar..." />
          <button>🔍</button>
        </div>
      </div>
    </nav>
  );
}
