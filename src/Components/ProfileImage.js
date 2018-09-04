import React from 'react'
import styled from 'styled-components'
import { elevation } from 'utilities'

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
  ${elevation[2]};
`

export default props => {
  return (
    <ImageWrapper>
      <Image {...props} />
    </ImageWrapper>
  )
}
