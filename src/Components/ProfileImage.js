import React from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'

import { elevation, colors } from '../utilities'

const ImageWrapper = styled(animated.div)`
  position: relative;
  width: 190px;
  height: 140px;
  z-index: 2;
`

const Image = styled.img`
  position: absolute;
  width: 190px;
  height: 190px;
  border-radius: 50%;
  background: ${colors.maastrichtBlue};
  border: 5px solid ${colors.maastrichtBlue};
  box-sizing: border-box;
  ${elevation[2]};
`

export default function ProfileImage({ style, ...props }) {
  return (
    <ImageWrapper style={style}>
      <Image alt="" {...props} />
    </ImageWrapper>
  )
}
