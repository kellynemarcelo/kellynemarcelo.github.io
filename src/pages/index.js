import * as React from "react"
import { graphql } from "gatsby"
import "@fontsource/poppins"
import "../styles/global.css"
import logo from "../images/logo.jpg"

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const posts = edges.map(edge => edge.node).map(({ id, excerpt, frontmatter: { slug, title, date, tags } }) => (
    <a key={id} href={slug} className="article-link">
      <article>
        <small>{date}</small>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <strong>{tags.split(',').map(tag => `#${tag} `)}</strong>
      </article>
    </a>
  ));

  return (
    <>
      <div className="background-slant" />

      <nav className="header-navigation">
        <a href="/" className="logo-link">
          <img src={logo} alt='Kellyn e Marcelo' />

          <div className="logo-kellyn-e-marcelo">
            Kellyn e Marcelo
            <hr />
          </div>
        </a>

        <ul>
          <li><a href="/">Sobre</a></li>
          <li><a href="/">Artigos</a></li>
          <li><a href="https://www.youtube.com/c/kellynemarcelo?sub_confirmation=1" target="_blank" rel="noreferrer">YouTube</a></li>
        </ul>
      </nav>

      <main>
        <title>Kellyn e Marcelo</title>

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

        <div className="articles">
          <div className="articles-title">
            <h2>Artigos</h2>
            <hr />
          </div>

          {posts}
        </div>
      </main>

      <footer>
        <div className="footer-content">
          <div className="copyright">© Kellyn e Marcelo 2021</div>

          <div className="social-media">
            <a href="https://www.youtube.com/c/kellynemarcelo?sub_confirmation=1" aria-label="YouTube" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#333" d="M23.8 7.2s-.2-1.7-1-2.4c-.9-1-1.9-1-2.4-1-3.4-.2-8.4-.2-8.4-.2s-5 0-8.4.2c-.5.1-1.5.1-2.4 1-.7.7-1 2.4-1 2.4S0 9.1 0 11.1v1.8c0 1.9.2 3.9.2 3.9s.2 1.7 1 2.4c.9 1 2.1.9 2.6 1 1.9.2 8.2.2 8.2.2s5 0 8.4-.3c.5-.1 1.5-.1 2.4-1 .7-.7 1-2.4 1-2.4s.2-1.9.2-3.9V11c0-1.9-.2-3.8-.2-3.8zM9.5 15.1V8.4l6.5 3.4-6.5 3.3z"></path></svg>
              <span>kellynemarcelo</span>
            </a>

            <a href="https://www.instagram.com/kellynvd" aria-label="Instagram" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="#333"><path d="M12 2.162c3.204 0 3.584.012 4.849.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.265-.058 1.645-.07 4.849-.07M12 0C8.741 0 8.332.014 7.052.072c-1.95.089-3.663.567-5.038 1.942C.639 3.389.161 5.102.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.089 1.95.567 3.663 1.942 5.038 1.375 1.375 3.088 1.853 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.95-.089 3.663-.567 5.038-1.942 1.375-1.375 1.853-3.088 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.089-1.95-.567-3.663-1.942-5.038C20.611.639 18.898.161 16.948.072 15.668.014 15.259 0 12 0z"></path><path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"></path><circle cx="18.406" cy="5.594" r="1.44"></circle></g></svg>
              <span>@kellynvd</span>
            </a>

            <a href="https://www.instagram.com/marcelobalexandre" aria-label="Instagram" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="#333"><path d="M12 2.162c3.204 0 3.584.012 4.849.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.265-.058 1.645-.07 4.849-.07M12 0C8.741 0 8.332.014 7.052.072c-1.95.089-3.663.567-5.038 1.942C.639 3.389.161 5.102.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.089 1.95.567 3.663 1.942 5.038 1.375 1.375 3.088 1.853 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.95-.089 3.663-.567 5.038-1.942 1.375-1.375 1.853-3.088 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.089-1.95-.567-3.663-1.942-5.038C20.611.639 18.898.161 16.948.072 15.668.014 15.259 0 12 0z"></path><path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"></path><circle cx="18.406" cy="5.594" r="1.44"></circle></g></svg>
              <span>@marcelobalexandre</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { title: { ne: "" } } }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            slug
            date(formatString: "DD-MM-YYYY")
            title
            tags
          }
        }
      }
    }
  }
`

export default IndexPage
