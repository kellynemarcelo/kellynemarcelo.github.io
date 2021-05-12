import React from "react"
import { graphql } from "gatsby"
import Header from '../components/Header'
import Footer from '../components/Footer'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`

const Article = ({ data: { markdownRemark: { frontmatter, html } } }) => (
  <div className="page article-page">
    <Header>
        <div className="presentation">
          <div className="presentation-content">
            <h1>{frontmatter.title}</h1>
          </div>

          <hr />
        </div>
    </Header>

    <main>
      <title>Kellyn e Marcelo</title>

      <small>{frontmatter.date}</small>

      <article
        className="article-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>

    <Footer />
  </div>
)

export default Article;
