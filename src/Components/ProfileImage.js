import React from 'react'
import styled from 'styled-components'

import { elevation, colors } from '../utilities'

const ImageWrapper = styled.div`
  position: relative;
  width: 190px;
  height: 140px;
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

export default function ProfileImage(props) {
  return (
    <ImageWrapper>
      <Image alt="" {...props} />
    </ImageWrapper>
  )
}
