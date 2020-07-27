import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

import Container from "../../Atoms/Container"
import {H1, H2, H3} from '../../Atoms/Typography'

const HeroCon = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeroImage = styled(BackgroundImage)`
  height: 100vh;
  min-height: 700px;
  display: flex;
  // justify-content: flex-start;
  align-items: flex-start;
`

const Hero = ({data}) => {
  return (
    <section>
      <HeroImage fluid={data.heroImage.fluid} backgroundColor='#038391' alt={data.heroImage.alt}>
        <HeroCon>
          <H1>{data.heroText}</H1>
        </HeroCon>
      </HeroImage>
    </section>
  )
}

export default Hero