import * as React from 'react'

import Layout from '../components/layout/layout'
import Seo from '../components/seo/seo'
import Products from '../components/products/products'

import { IPage } from '../models/page.interface'

const ProductsPage = ({ data, location }: IPage) => {
  //   const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title="some title">
      <Seo title="Products" />
      <Products />
    </Layout>
  )
}

export default ProductsPage
