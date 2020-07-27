import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Organisms/Header/Header"
import Footer from "./Organisms/Footer"
import { ThemeProvider } from "styled-components"
import styleSettings from "../styles/styleSettings"
import GlobalStyle from "../styles/globalStyles"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      footer: datoCmsFooter{
          newsletterHeading
          newsletterTextNode{
            childMarkdownRemark{
              html
          }
        }
      }
    }
  `)

  return (
    <>
    <ThemeProvider theme={styleSettings}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
      <Footer data={data.footer}/>
    </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
