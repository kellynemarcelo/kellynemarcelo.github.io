import React from "react"
import "@fontsource/poppins"
import "../styles/global.css"
import { graphql } from "gatsby"
import Header from '../components/Header'
import Footer from '../components/Footer'
import kellyn from "../images/kellyn.jpg"
import marcelo from "../images/marcelo.jpg"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        author
        tags
        date(formatString: "DD-MM-YYYY")
      }
    }
  }
`

const ArticleTemplate = ({ data: { markdownRemark: { frontmatter: { title, description, author, date, tags }, html } } }) => {
  const authorAvatar = author === 'kellyn' ? kellyn : marcelo
  const authorFullName = author === 'kellyn' ? 'Kellyn Duarte' : 'Marcelo Alexandre'


  return (
    <div className="page article-page">
      <Header>
          <div className="presentation">
            <div className="presentation-content">
              <h1>{title}</h1>

              <h2>{description}</h2>
            </div>

            <hr />
          </div>
      </Header>

      <main>
        <title>Kellyn e Marcelo</title>

        <div className="logo-author-and-date-container">
          <img src={authorAvatar} alt={authorFullName} />

          <div className="author-and-date-container">
            <strong>{authorFullName}</strong>
            <small>{date}</small>
          </div>
        </div>

        <div className="tags">
          {tags ? tags.split(',').map(tag => <span className="tag">#{tag}</span>) : null}
        </div>

        <article
          className="article-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>

      <Footer />
    </div>
  )
}

export default ArticleTemplate;
