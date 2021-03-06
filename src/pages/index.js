import React from "react"
// import { Link } from "gatsby"
// import styled from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Hero from "../components/Organisms/Hero"
import About from "../components/Organisms/About"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      index:  datoCmsHome{
        heroText
        heroImage{
          fluid(maxWidth: 2000, imgixParams: { fm: "jpg", auto: "compress" , fit: "crop", crop: "focalpoint", fpZ: 1, fpX: 0.4 }) {
            ...GatsbyDatoCmsFluid
          }
          alt
        }
        aboutHeading
        aboutTextNode{
          childMarkdownRemark{
            html
          }
        }
      }
    }
  `)

  return (
  <Layout>
    <SEO title="Worga Foundation | Home" />
    <Hero data={data.index}/>
    <About data={data.index}/>
  </Layout>
  )
}


export default IndexPage
