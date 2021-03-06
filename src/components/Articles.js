import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { title: { ne: "" } } },
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            slug
            date(formatString: "DD-MM-YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`

const Articles = () => {
  const { allMarkdownRemark: { edges } } = useStaticQuery(query)

  return (
    edges.map(edge => edge.node).map(({ id, excerpt, frontmatter: { slug, title, description, date, tags } }) => (
      <a key={id} href={slug} className="article-link">
        <article>
          <small>{date}</small>
          <h3>{title}</h3>
          <p>{description || excerpt}</p>
          {tags ? <strong>{tags.split(',').map(tag => `#${tag} `)}</strong> : null}
        </article>
      </a>
    ))
  )
}

export default Articles
