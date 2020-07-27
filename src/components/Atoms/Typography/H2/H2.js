import styled from 'styled-components'

const H2 = styled.h2`
  font-size: 2.813rem;
  line-height: 1.1;
  width: 240px;
  ${p => p.theme.mediaQueries.ipadUp}{
    font-size: 3.75rem;
    width: 320px;
  }
`
export default H2