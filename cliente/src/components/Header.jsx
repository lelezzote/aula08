
import styles from "../styles/header.module.css";

export default function Header() {
  return(
    <>
    <nav className={styles.navbar}>
    <div className={styles.navbar-ader}>
    <ul className={styles.navbar-second}>
            <img className={styles.logo-nav} src='https://4maos.com.br/wp-content/uploads/2022/06/LOGOS-PARA-BLOG-1300x30003-1-2048x887.png'/>
        </ul>
        <ul className={styles.navbar-menu}>
        </ul>

       
    
    </div>
    </nav>
    </>
  );
  
}
