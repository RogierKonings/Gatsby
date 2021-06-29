import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import Seo from '../components/seo/seo'
import Blogs from '../components/blogs/blogs'

import { IPage } from '../models/page.interface'

const IndexPage = ({ data, location }: IPage) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <Blogs data={data} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
