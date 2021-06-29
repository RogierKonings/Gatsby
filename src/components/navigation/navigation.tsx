import { Link } from 'gatsby'
import * as React from 'react'

const Navigation = ({}) => {
  return (
    <section id="header" className="wrapper">
      <nav id="nav">
        <ul>
          <li className="current">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products/">Products</Link>
          </li>
          <li>
            <Link to="/bio/">Contact</Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Navigation
