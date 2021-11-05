/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const { author } = data.site.siteMetadata

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          I'm Vincent, a web developer who lives in San Diego, and also I eat a
          lot of pasta. My pronouns are he/him.
          <br />
          <a href="https://github.com/vcolavin">Here's my Github profile.</a>
          <br />
          <a href="https://vcolavin.wordpress.com">
            Here's my old archived blog.
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
