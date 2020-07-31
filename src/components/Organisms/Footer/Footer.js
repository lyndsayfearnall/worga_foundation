import React from "react"
import styled from "styled-components"

import Container from "../../Atoms/Container"
import {H2, Markdown, Dot} from "../../Atoms/Typography"
import Icon from "../../Atoms/Icon"

import Newsletter from '../../Molecules/NewsletterForm'

const FooterCon = styled.div`
  background-color: ${p => p.theme.color.darkOrange};
  h2, p{
    color: white;
  }
  position: relative;
  overflow: hidden;
`
const FlexContainer = styled(Container)`
  display: flex;
  flex-flow: column nowrap;
  ${p => p.theme.mediaQueries.ipadUp}{
    flex-flow: row nowrap;
  }
`
const IconCon = styled.div`
  padding-top: 20px;
  ${p => p.theme.mediaQueries.ipadUp}{
    position: absolute;
    bottom: 0;
    right: 0;
    padding-bottom: 50px; 
  }
`

const Footer = ({data}) => {
  return(
    <FooterCon>
      <FlexContainer>
        <div>  
          <H2>{data.newsletterHeading}<Dot teal /></H2>
          <Markdown markdown={data.newsletterTextNode.childMarkdownRemark.html}/>
          <Newsletter />
        </div>
        <IconCon>
          <Icon />
        </IconCon>
      </FlexContainer>
    </FooterCon>
  )
}

export default Footer