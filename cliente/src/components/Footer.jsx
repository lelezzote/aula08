import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.coluna}>
          <h4>Sobre nós</h4>
          <ul>
            <li>Nossa história</li>
            <li>Trabalhe conosco</li>
            <li>Política de sustentabilidade</li>
          </ul>
        </div>
        <div className={styles.coluna}>
          <h4>Atendimento</h4>
          <ul>
            <li>Central de Ajuda</li>
            <li>Trocas e devoluções</li>
            <li>Política de privacidade</li>
          </ul>
        </div>
        <div className={styles.coluna}>
          <h4>Informações</h4>
          <ul>
            <li>Termos de uso</li>
            <li>Política de segurança</li>
            <li>Formas de pagamento</li>
          </ul>
        </div>
        <div className={styles.coluna}>
          <h4>Nos siga</h4>
          <div className={styles.socialLinks}>
            <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-256.png"/>
            <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-256.png"/>
            <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_twitter-256.png"/>
            <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-512.png"/>
          </div>
        </div>
      </div>
      <div className={styles.rodape}>
        <p>&copy; 2025 Rio Modas. Todos os direitos reservados.</p>
        <a href="#">Termos de Uso</a>
        <a href="#">Privacidade</a>
      </div>
    </footer>
  );
}
