export interface IPost {
  frontmatter: {
    title: string
    date: Date
    description: string
  }
  fields: {
    slug: string
  }
  excerpt: string
}
