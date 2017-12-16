import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div>
    <ul style={{listStyle: 'none'}}>
      {data.allMarkdownRemark.edges.map(post => {
        return <li key={post.node.id}>
          <Link style={{textDecoration: 'none'}} to={post.node.frontmatter.path}>{post.node.frontmatter.title} </Link>
        </li>
      })}
    </ul>

  </div>
)
export const pageQuery = graphql`
  query IndexQury {
     allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default IndexPage
