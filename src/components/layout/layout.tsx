// src/global.d.ts
declare const __PATH_PREFIX__: string

import * as React from 'react'
import { Link } from 'gatsby'
import { ReactNode } from 'react'
import { ReactPortal } from 'react'

import './layout.scss'

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
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}</footer>
    </div>
  )
}

export default Layout