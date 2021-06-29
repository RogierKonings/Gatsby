// src/global.d.ts
declare const __PATH_PREFIX__: string

import * as React from 'react'
import { ReactNode } from 'react'
import { ReactPortal } from 'react'

import Navigation from '../navigation/navigation'
import Footer from '../footer/footer'

const Layout = ({
  location,
  title,
  children,
}: {
  location: URL
  title: string
  children: ReactNode | ReactPortal
}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="page-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <Navigation />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
