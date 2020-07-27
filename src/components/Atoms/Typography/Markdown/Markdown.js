import React from 'react'
import styled from 'styled-components'

const MarkdownContainer = styled.div`
  ${p => p.style};
  h1, h2, h3{
    font-family: ${p => p.theme.font.heading};
    color: ${p => p.theme.color.teal};
  }
`
const Markdown = ({ markdown, style }) => (
  <MarkdownContainer
    dangerouslySetInnerHTML={{ __html: markdown }}
    style={style}
  />
)

export default Markdown