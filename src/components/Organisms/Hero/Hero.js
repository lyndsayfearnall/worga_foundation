import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

import Container from "../../Atoms/Container"
import {H1, Dot} from '../../Atoms/Typography'

const HeroCon = styled(Container)`
  display: flex;
  height: 100vh;
  min-height: 700px;
  align-items: center;
  h1{
    width: 70%;
  }
  ${p => p.theme.mediaQueries.mediumUp}{
    h1{
      width: 65%;
    }
  }
`

const HeroImage = styled(BackgroundImage)`
  height: 100vh;
  min-height: 600px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

const Overlay = styled.div`
  background: rgba(54, 73, 75, 44%);
  width: 100vw;
  height: 100vh;
  min-height: 600px;
  position: absolute;
  top: 0;
`

const Hero = ({data}) => {
  return (
    <section>
      <HeroImage fluid={data.heroImage.fluid} backgroundColor='#038391' alt={data.heroImage.alt}>
      </HeroImage>
      <Overlay>
      <HeroCon>
        <H1>{data.heroText}<Dot /></H1>
      </HeroCon>
      </Overlay>
    </section>
  )
}

export default Hero