import * as React from "react"
import logo from "../images/logo.jpg"

const Header = ({ children }) => (
  <header>
    <div className="header-content">
      <nav className="header-navigation">
        <a href="/" className="logo-link">
          <img src={logo} alt='Kellyn e Marcelo' />

          <div className="logo-kellyn-e-marcelo">
            Kellyn e Marcelo
            <hr />
          </div>
        </a>

        <ul>
          <li><a href="/"><span role="img" aria-label="">ℹ️</span> Sobre</a></li>
          <li><a href="/articles"><span role="img" aria-label="">📝</span> Artigos</a></li>
          <li>
            <a
              href="https://www.youtube.com/c/kellynemarcelo?sub_confirmation=1"
              target="_blank"
              rel="noreferrer"
            >
              <span role="img" aria-label="">📺</span> YouTube
            </a>
          </li>
        </ul>
      </nav>

      {children}
    </div>

    <div className="background-slant" />
  </header>
)

export default Header
