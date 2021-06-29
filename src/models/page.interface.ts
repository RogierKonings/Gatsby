import { IPost } from './post.interface'

export interface IPage {
  data: IData
  location: URL
}

export interface IData {
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
