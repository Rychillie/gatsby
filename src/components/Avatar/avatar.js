import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import avatar from "../Avatar/avatar.css"

export default function Image() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile-image.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
      <Img 
      fixed={data.file.childImageSharp.fixed} 
      className="avatarImg"
      alt="Foto profile Rodrigo"
      />
  )
}