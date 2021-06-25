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
  }
  location: URL
}
