import * as React from "react"
import "@fontsource/poppins"
import "../styles/global.css"
import Header from "../components/Header"
import Articles from "../components/Articles"
import Footer from "../components/Footer"

const IndexPage = () => (
  <div className="page index-page">
    <Header>
      <div className="presentation">
        <div className="presentation-content">
          <h1>Olá, amig@! <span role="img" aria-label="">👋</span></h1>

          <h2>
            Bem vind@ ao nosso site, nós somos programadores e produtores de conteúdo.
          </h2>

          <h2>
            Aqui você vai encontrar artigos que escrevemos sobre tecnologia, programação e desenvolvimento pessoal.
          </h2>
        </div>

        <div className="presentation-video">
          <iframe
            title="YouTube"
            src="https://www.youtube.com/embed/watch?v=CMnlZwtD3v8&list=UUHbB4yVkCrNO49ASWEWsUww&index=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
            frameBorder="0"
          />
        </div>
      </div>
    </Header>

    <main>
      <title>Kellyn e Marcelo</title>

      <div className="articles">
        <div className="articles-title">
          <h2><span role="img" aria-label="">📝</span> Artigos</h2>
          <hr />
        </div>

        <Articles />
      </div>
    </main>

    <Footer />
  </div>
)

export default IndexPage
