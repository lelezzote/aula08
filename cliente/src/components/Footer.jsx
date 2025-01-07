import styles from '../styles/footer.module.css'; 

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerFoot}>
        <img className={styles.logoFooter} src="" alt="Logo Footer" />
        
        <ul className={styles.navbarFooter}>
          <li>Nossas Lojas</li>
          <li>Entrega e Frete</li>
          <li>Trocas e Devoluções</li>
          <li>Política de Segurança</li>
          <li>Forma de pagamento</li>
          <li>Política de Privacidade</li>
          <li>Central de Ajuda</li>
        </ul>
      </div>
    </footer>
  );
}
