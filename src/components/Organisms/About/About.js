import React from 'react'
import styled from 'styled-components'

import Container from "../../Atoms/Container"
import {H2, Markdown} from "../../Atoms/Typography"

const AboutCon= styled.div`
  position: relative;
  overflow: hidden;
`

const Circle = styled.div`
  width: 205px;
  height: 205px;
  border-radius: 300px;
  border: 15px solid ${p => p.theme.color.orange};
  opacity: 75%;
  position: absolute;
  right: -105px;
  top: -105px;
  ${p => p.theme.mediaQueries.mediumUp}{

  }
`

const About = ({data}) => {
  return (
    <AboutCon>
      {/* <Circle/> */}
      <Container>
        <H2>{data.aboutHeading}</H2>
        <Markdown markdown={data.aboutTextNode.childMarkdownRemark.html}/>
      </Container>
    </AboutCon>
  )
}

export default About