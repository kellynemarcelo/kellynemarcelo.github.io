import * as React from "react"
import "@fontsource/poppins"
import "../styles/global.css"
import Header from '../components/Header'
import Articles from '../components/Articles'
import Footer from '../components/Footer'

const ArticlesPage = () => (
  <div className="page articles-page">
    <Header>
      <div className="presentation">
        <div className="presentation-content">
          <h1><span role="img" aria-label="">📝</span> Artigos</h1>

          <h2>
            Aqui você vai encontrar artigos que escrevemos sobre tecnologia, programação e desenvolvimento pessoal.
          </h2>
        </div>

        <hr />
      </div>
    </Header>

    <main>
      <title>Kellyn e Marcelo</title>

      <div className="articles">
        <Articles />
      </div>
    </main>

    <Footer />
  </div>
)

export default ArticlesPage
