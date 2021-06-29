import { Link } from 'gatsby'
import * as React from 'react'
import { IData } from '../../models/page.interface'

const Blogs = ({ data }: { data: IData }) => {
  const posts = data.allMarkdownRemark.nodes

  let blogs

  if (posts.length === 0) {
    blogs = <p>No blog posts found.</p>
  } else {
    blogs = (
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    )
  }
  return (
    <section className="wrapper style3">
      <div className="title">Blogs</div>
      <div className="container">{blogs}</div>
    </section>
  )
}

export default Blogs
