import styled from 'styled-components'
import React from 'react'

const DotSpan = styled.span`
  color: ${p => (p.teal ? p.theme.color.teal : p.theme.color.orange)};
`
const Dot = ({teal}) => (
  <DotSpan teal={teal}>.</DotSpan>
)

export default Dot