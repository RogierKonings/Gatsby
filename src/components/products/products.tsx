import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

const Products = ({}) => {
  return (
    <section className="wrapper style3">
      <div className="title">Products</div>
      <div className="container">
        <div className="row aln-center">
          <div className="col-4 col-12-medium">
            <section className="highlight">
              <a href="#" className="image featured">
                <StaticImage
                  className="bio-avatar"
                  formats={['auto', 'webp', 'avif']}
                  src="../../assets/images/pic02.jpg"
                  placeholder="blurred"
                  alt=""
                />
              </a>
              <h3>
                <a href="#">Aliquam diam consequat</a>
              </h3>
              <p>
                Eget mattis at, laoreet vel amet sed velit aliquam diam ante,
                dolor aliquet sit amet vulputate mattis amet laoreet lorem.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button style1">
                    Learn More
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div className="col-4 col-12-medium">
            <section className="highlight">
              <a href="#" className="image featured">
                <StaticImage
                  className="bio-avatar"
                  formats={['auto', 'webp', 'avif']}
                  src="../../assets/images/pic03.jpg"
                  placeholder="blurred"
                  alt=""
                />
              </a>
              <h3>
                <a href="#">Nisl adipiscing sed lorem</a>
              </h3>
              <p>
                Eget mattis at, laoreet vel amet sed velit aliquam diam ante,
                dolor aliquet sit amet vulputate mattis amet laoreet lorem.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button style1">
                    Learn More
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div className="col-4 col-12-medium">
            <section className="highlight">
              <a href="#" className="image featured">
                <StaticImage
                  className="bio-avatar"
                  formats={['auto', 'webp', 'avif']}
                  src="../../assets/images/pic04.jpg"
                  placeholder="blurred"
                  alt=""
                />
              </a>
              <h3>
                <a href="#">Mattis tempus lorem</a>
              </h3>
              <p>
                Eget mattis at, laoreet vel amet sed velit aliquam diam ante,
                dolor aliquet sit amet vulputate mattis amet laoreet lorem.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button style1">
                    Learn More
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
