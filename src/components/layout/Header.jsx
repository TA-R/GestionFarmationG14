function Header() {
  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <a className="site-header__brand" href="/">
          <span className="site-header__logo" aria-hidden="true">
            GF
          </span>
          <span>Gestion Formation</span>
        </a>

        <nav className="site-header__nav" aria-label="Navigation principale">
          <a href="/">ADMIN</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
