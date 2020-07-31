import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

import Container from "../../Atoms/Container"
import {H1, Dot, H2, H3} from '../../Atoms/Typography'

const HeroCon = styled(Container)`
  display: flex;
  height: 100vh;
  min-height: 700px;
  align-items: center;
  h1{
    width: 75%;
  }
`

const HeroImage = styled(BackgroundImage)`
  height: 100vh;
  min-height: 700px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

const Hero = ({data}) => {
  return (
    <section>
      <HeroImage fluid={data.heroImage.fluid} backgroundColor='#038391' alt={data.heroImage.alt}>
        <HeroCon>
          <H1>{data.heroText}<Dot /></H1>
        </HeroCon>
      </HeroImage>
    </section>
  )
}

export default Hero