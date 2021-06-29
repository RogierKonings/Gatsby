import * as React from 'react'

import Layout from '../components/layout/layout'
import Seo from '../components/seo/seo'
import Contact from '../components/contact/contact'

import { IPage } from '../models/page.interface'

const ContactPage = ({ data, location }: IPage) => {
  //   const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title="some title">
      <Seo title="Contact" />
      <Contact />
    </Layout>
  )
}

export default ContactPage
