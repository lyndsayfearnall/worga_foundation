import { font, color } from "./styleSettings.js"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html{
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  text-rendering: geometricPrecision;
}

h1, h2, h3{
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  color: ${color.teal};
  font-family: ${font.heading};
  padding: 0.9375rem 0;
  -webkit-font-smoothing: antialiased;
}

body{
  font-family: ${font.body};
  -webkit-font-smoothing: antialiased;
  color: ${color.black};
  background: #ffffff;
  a{
    color: ${color.teal};
    -webkit-transition: 0.3s all;
    transition: 0.3s all;
    &:hover{
      color: ${color.lightTeal};
    }
  }
  p{
    padding-bottom: 0.625rem;
  }
}

@media print {
  body {
    font-size: 12px;
  }
}
`
export default GlobalStyle