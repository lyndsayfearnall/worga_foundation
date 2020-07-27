import styled from "styled-components"

const Container = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  padding: 50px 20px;
  ${p => p.theme.mediaQueries.ipadUp}{
    padding: 50px;
  }
`
export default Container