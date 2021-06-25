export interface IPost {
  frontmatter: {
    title: string
    date: Date
    description: string
  }
  fields: {
    slug: string
  }
  html: string
  excerpt: string
}
