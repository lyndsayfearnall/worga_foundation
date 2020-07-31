import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 3rem;
  color: white;
  line-height: 1.1;
  ${p => p.theme.mediaQueries.ipadUp}{
    font-size: 4rem;
  }
  ${p => p.theme.mediaQueries.largeUp}{
    font-size: 4.2rem;
  }
`
export default H1