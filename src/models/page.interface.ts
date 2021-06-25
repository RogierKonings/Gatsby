import { IPost } from "./post.interface"

export interface IPage {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    allMarkdownRemark: {
      nodes: IPost[]
    }
    markdownRemark: IPost
    previous: IPost
    next: IPost
  }
  location: URL
}
