import buildMediaQueries from "./buildMediaQueries.js"

const breakpoints = {
  minimum: 0,
  tiny: 400,
  small: 640,
  ipad: 750,
  medium: 800,
  large: 905,
  big: 950,
  xlarge: 1021,
  huge: 1400,
}

let mediaQueries = buildMediaQueries(breakpoints)
mediaQueries["print"] = `@media only print`

const color = {
  teal: "#038391",
  lightTeal: "#11ABBF",
  orange: "#E69022",
  darkOrange: "#DD7714",
  black: "#36494B",
  navy: "#0F174A",
  white: "#ffffff",
  lightGrey: "##919C9D",
}

const font = {
  heading: "filson-soft, Montserrat, sans-serif",
  body: "Red Hat Display, Montserrat, sans-serif",
}

const defaultExport = {
  breakpoints,
  color,
  font,
  mediaQueries,  
}

export { defaultExport as default, breakpoints, color, font, mediaQueries }