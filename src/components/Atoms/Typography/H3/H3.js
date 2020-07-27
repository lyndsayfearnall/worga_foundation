import styled from 'styled-components'

const H3 = styled.h3`
  font-size: 2.188rem;
  line-height: 1.1;
  font-weight: 300;
  ${p => p.theme.mediaQueries.ipadUp}{
    font-size: 2.188rem;
  }
`
export default H3