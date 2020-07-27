function buildMediaQueries(breakpoints) {
  //  Build array of breakpoints from object
  let breakpointsArray = []
  for (var key in breakpoints) {
    if (breakpoints.hasOwnProperty(key)) {
      breakpointsArray.push({
        name: key,
        minWidth: breakpoints[key],
      })
    }
  }
  //  Generate media queries based on breakpoints
  let mediaQueries = {}
  //  Screen media queries
  const screen = "only screen"
  breakpointsArray.forEach((bp, i) => {
    const isLast = i === breakpointsArray.length - 1
    bp.maxWidth = isLast ? 99999 : breakpointsArray[i + 1].minWidth - 1
    const thisMin = `(min-width: ${bp.minWidth}px)`
    const thisMax = `(max-width: ${bp.maxWidth}px)`
    mediaQueries[`${bp.name}`] = thisMin
    mediaQueries[`${bp.name}Up`] = `@media ${screen} and ${thisMin}`
    mediaQueries[`${bp.name}Down`] = `@media ${screen} and ${thisMax}`
    mediaQueries[
      `${bp.name}Only`
    ] = `@media ${screen} and ${thisMin} and ${thisMax}`
  })
  return mediaQueries
}

export default buildMediaQueries