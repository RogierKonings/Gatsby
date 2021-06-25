export interface ISeo {
  description: string
  lang: string
  meta: ConcatArray<{ name: string; content: any; property?: undefined }>
  title: string
}
