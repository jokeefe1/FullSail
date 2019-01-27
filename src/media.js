import { css } from 'styled-components'

const sizes = {
    desktop: 2000,
    tabletLarge: 960,
    tablet: 700,
    phone: 699
}
export default Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
    return acc
}, {})