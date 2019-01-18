import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const width = '197'
const height = '24'
const viewBox = '0 0 197 24'

const sizes = {
  small: { width: 18, height: 18 },
  mediuim: { width: 24, height: 24 }
}

const getDimensions = (size, sizes) => {
  if (size && typeof size.width === 'number' && typeof size.height === 'number') {
    return size
  }
  return size && sizes[size]
    ? sizes[size]
    : { width, height }
}

const getCss = (size, sizes, fillColor, fillColorRule, noStyles) => {
  if (noStyles) { return '' }
  const dimensions = getDimensions(size, sizes)
  const fillRule = fillColor && fillColorRule ? `${fillColorRule}{ fill: ${fillColor}; }` : ''
  return css`
    width: ${dimensions.width}px;
    height: ${dimensions.height}px;
    ${fillRule}
  `
}

const propsToCss = ({
  size,
  sizes,
  fillColor,
  fillColorRule,
  noStyles
}) => getCss(size, sizes, fillColor, fillColorRule, noStyles)

const Image = styled.svg`${propsToCss}`

const children = (
  <Fragment>
    <defs
      key='key-0'
    />
    <path
      d='M67.29 25.22c.2-.28.34-.44.34-.44l-.91-.54c-.09.16-.21.36-.36.58a6.12 6.12 0 0 1 .93.4zM82 19l-.38.29c-.59.47-1.69 1.31-2.88 2.22-2.25 1.72-4.81 3.64-4.81 3.64.6.37 2.36 1.53 3 2l.58-.56c.22-.23.38-.41.63-.28a1.08 1.08 0 0 1 .75.7l.11.38.84-.25h.21a.84.84 0 0 1 .21 0 .88.88 0 0 1 .25.08 1 1 0 0 1 .23.15.58.58 0 0 1 .13.16.25.25 0 0 1 0 .15.19.19 0 0 1-.09.12l-1.31.9h-.07c0 .09.1.15 0 .21a.41.41 0 0 1-.32 0 .75.75 0 0 1-.23.11l-.93.54a.24.24 0 0 1-.11 0h-.4l-.2-.06-.15-.07-.06-.06.18-.78-.34-.1-5.66-1.66s-4.18 1.61-4.37 1.69a.77.77 0 0 1-.63 0c-.28-.11-.47-.3-.26-.8a11.55 11.55 0 0 1 .6-1.28 6.28 6.28 0 0 1-.79-.83 1.91 1.91 0 0 1-.84.75 2.67 2.67 0 0 1 .7-1.29.25.25 0 0 1-.1-.25.27.27 0 0 1 .28 0 7.73 7.73 0 0 1 .69-.78c-2.3-1.48-2.66-2.45-2.45-2.73s1.34 0 1.34 0a.28.28 0 0 1 .22-.13 6.78 6.78 0 0 1 2.69.91A9.61 9.61 0 0 1 69.1 21a.34.34 0 0 1-.1-.37.35.35 0 0 1 .37 0 3.56 3.56 0 0 1 1.45-1.3 2.44 2.44 0 0 1-.68 1.26 14.72 14.72 0 0 1 2.16 1.14l6.19-2.94c.24-.11.91-.47 1.65-.8l1-.51A11.9 11.9 0 1 0 82 19zm-13.41 3.34c.64.34 1.12.62 1.12.62l.47-.21a7.61 7.61 0 0 1-.94-1.06c-.24.31-.46.49-.65.65z'
      transform='translate(-59.19 -12.11)'
      key='key-1'
    />
    <path
      d='M96.55 19l-.23 1.66h-3.26V23h2.6v1.68h-2.6v4.55H91V19h5.55zM101.31 19v6.73a2.76 2.76 0 0 0 .18 1.22 1.45 1.45 0 0 0 1.4.7 1.38 1.38 0 0 0 1.56-1.19 6.54 6.54 0 0 0 0-.91V19h2.09v6.89a4.12 4.12 0 0 1-.16 1.6c-.27.81-1.27 1.93-3.47 1.93a3.67 3.67 0 0 1-3.28-1.37 3.05 3.05 0 0 1-.44-1.93V19h2.11zM112.11 19v8.52h3.67l-.37 1.71H110V19h2.1zM120.55 19v8.52h3.67l-.37 1.71h-5.4V19h2.1zM137.49 21.2a4.43 4.43 0 0 0-2.38-.78 1.26 1.26 0 0 0-1.43 1.18c0 .53.28.79 1.13 1l1.19.4a3.07 3.07 0 0 1 2.59 3c0 2.07-1.68 3.44-4.23 3.44a7.3 7.3 0 0 1-3.49-.93l.76-1.6a5.81 5.81 0 0 0 2.81.82c1.18 0 1.8-.48 1.8-1.4A1.42 1.42 0 0 0 135 25l-1.14-.31a3.1 3.1 0 0 1-2-1.3 2.94 2.94 0 0 1-.43-1.56c0-1.87 1.5-3.16 3.67-3.16a6 6 0 0 1 3.42 1zM145.42 19l3.22 10.26h-2.21l-.72-2.43h-3l-.71 2.4h-2.15L143.2 19h2.22zm-.21 6.12s-.33-1.12-.55-2.12c-.1-.47-.41-1.81-.41-1.81l-.49 2c-.19.74-.32 1.22-.54 1.9h2zM153 19v10.23h-2.2V19h2.2zM158.56 19v8.52h3.67l-.37 1.71h-5.4V19h2.11zM171 19v6.73a2.78 2.78 0 0 0 .18 1.22 1.45 1.45 0 0 0 1.4.7 1.38 1.38 0 0 0 1.56-1.19 6.77 6.77 0 0 0 0-.91V19h2.09v6.89a4.15 4.15 0 0 1-.16 1.6c-.26.81-1.26 1.93-3.47 1.93a3.67 3.67 0 0 1-3.28-1.37 3 3 0 0 1-.44-1.93V19H171zM182 19l2 4.09a19.41 19.41 0 0 1 1.1 2.91c-.07-.79-.15-2.11-.16-2.81v-4.18h2v10.22h-2.24l-1.7-3.91c-.57-1.28-1.19-2.72-1.39-3.36.08.84.09 2 .11 2.9l.06 4.37h-2V19H182zM192.45 19v10.23h-2.15V19h2.15zM197.22 19l1.69 5.33c.13.46.31 1 .47 1.78a18.85 18.85 0 0 1 .59-2l1.74-5.11h2.16l-3.56 10.3h-1.87L195 19h2.25zM212.22 19l-.22 1.68h-3.5v2.37h2.93v1.68h-2.9v2.74h3.87v1.77h-6V19h5.83zM219.12 19a2.84 2.84 0 0 1 3 3 2.63 2.63 0 0 1-2.28 2.83 2.09 2.09 0 0 1 .42.43c.59.74 2.46 4 2.46 4h-2.42c-.4-.68-.56-1-1-1.68-1-1.84-1.32-2.34-1.69-2.5a1.06 1.06 0 0 0-.33-.09v4.27h-2V19h3.81zm-1.8 4.42h.68a2.16 2.16 0 0 0 1.54-.34 1.38 1.38 0 0 0 .4-1 1.2 1.2 0 0 0-.74-1.25 3.7 3.7 0 0 0-1.16-.15h-.74v2.77zM231 21.2a4.42 4.42 0 0 0-2.38-.78 1.26 1.26 0 0 0-1.43 1.18c0 .53.28.79 1.13 1l1.22.4a3.07 3.07 0 0 1 2.59 3c0 2.07-1.68 3.44-4.22 3.44a7.3 7.3 0 0 1-3.49-.93l.77-1.6a5.81 5.81 0 0 0 2.81.82c1.18 0 1.79-.48 1.79-1.4a1.42 1.42 0 0 0-1.34-1.33l-1.13-.31a3.09 3.09 0 0 1-2-1.3 2.94 2.94 0 0 1-.43-1.56c0-1.87 1.5-3.16 3.67-3.16a6 6 0 0 1 3.42 1zM236.87 19v10.23h-2.15V19h2.15zM246.74 19l-.34 1.71H244v8.52h-2.09v-8.52h-2.5V19h7.37zM250.51 19l1.31 2.8a9.14 9.14 0 0 1 .52 1.31c.12-.29.32-.8.55-1.28L254.2 19h2.43l-3.27 6v4.21h-2.15V25L248 19h2.47z'
      transform='translate(-59.19 -12.11)'
      key='key-2'
    />
  </Fragment>
)

const defaultProps = {
  children,
  viewBox,
  fillColor: null,
  fillColorRule: '&&& path, &&& use, &&& g',
  sizes,
  size: null
}

const propTypes = {
  fillColor: PropTypes.string,
  fillColorRule: PropTypes.string,
  viewBox: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired
    })
  ]),
  sizes: (props, name, componentName) => {
    const prop = props[name]
    if (typeof prop !== 'object') { return }
    for (let key in prop) {
      if (!prop[key] || typeof prop[key].width !== 'number' || typeof prop[key].height !== 'number') {
        return new Error(
          'Invalid prop `' + name + '` supplied to `' + componentName + '`. Validation failed.'
        )
      }
    }
  }
}

export default Object.assign(Image, {
  getDimensions,
  getCss,
  defaultProps,
  propTypes,
  displayName: 'Logo'
})
