import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Logo from "../../Atoms/Logo"
import Container from "../../Atoms/Container"

const HeaderCon= styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  z-index: 1;
  position: absolute;
  top: 0;
  width: 100%;
`
const LogoCon = styled(Container)`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
`

const Title = styled.h1`
  display: none;
`
const HeaderLogo = styled(Logo)`
  height: 6.5em;
  ${p => p.theme.mediaQueries.mediumUp}{
    height: 8em;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderCon>
    <LogoCon>
      <Title>
        {siteTitle}
      </Title>
      <Link to="/">
        <HeaderLogo />
      </Link>
    </LogoCon>
  </HeaderCon>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
