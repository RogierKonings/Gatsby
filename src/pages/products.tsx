import * as React from 'react'

import Layout from '../components/layout/layout'
import Seo from '../components/seo/seo'

import { IPage } from '../models/page.interface'

const ProductsPage = ({ data, location }: IPage) => {
  //   const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title="some title">
      <Seo title="Contact" />
      some products...
    </Layout>
  )
}

export default ProductsPage
