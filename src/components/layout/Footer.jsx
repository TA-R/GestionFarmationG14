function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer" id="contact">
      <div className="site-container site-footer__inner">
        <div>
          <h2>Gestion Formation</h2>
          <p>
            Une plateforme simple pour explorer les formations et organiser les
            parcours des apprenants.
          </p>
        </div>
      </div>

      <div className="site-container site-footer__bottom">
        <p>&copy; {currentYear} Gestion Formation. Tous droits reserves.</p>
      </div>
    </footer>
  )
}

export default Footer
