import { css } from 'styled-components'
// import {
//   FlattenSimpleInterpolation
// } from 'styled-components'

// interface ISizes {
//   [giant: string]: number
//   desktop: number
//   tablet: number
//   phone: number
// }

// interface IAcc {
//   [x: string]: (...args: TemplateStringsArray[]) => FlattenSimpleInterpolation
// }

// interface IMedia {
//   [x: string]: (...args: TemplateStringsArray[]) => FlattenSimpleInterpolation
// }

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376,
}

const media = {
  giant: (...args) => null,
  desktop: (...args) => null,
  tablet: (...args) => null,
  phone: (...args) => null,
  ...Object.keys(sizes).reduce((accumulator, label) => {
    const emSize = sizes[label] / 16
    accumulator[label] = (...args) => css`
      @media (min-width: ${emSize}em) {
        ${css(...args)};
      }
    `
    return accumulator
  }, {}),
}

export default media
