import React from "react"
import { graphql } from "gatsby"
import Header from '../components/Header'
import Footer from '../components/Footer'
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

const Article = ({ data: { markdownRemark: { frontmatter: { title, description, author, date, tags }, html } } }) => (
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
        <img src={marcelo} alt='Marcelo Alexandre' />

        <div className="author-and-date-container">
          <strong>{author === 'marcelo' ? 'Marcelo Alexandre' : 'Kellyn Duarte'}</strong>
          <small>{date}</small>
        </div>
      </div>

      <div className="tags">
        {tags.split(',').map(tag => <span className="tag">#{tag}</span>)}
      </div>

      <article
        className="article-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>

    <Footer />
  </div>
)

export default Article;
