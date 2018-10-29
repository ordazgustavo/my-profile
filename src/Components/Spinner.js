import React from 'react'
import styled from 'styled-components'

import { colors } from '../utilities'

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  > i {
    color: ${colors.maastrichtBlue};
    font-size: 50px;
  }
`
export default function Spinner() {
  return (
    <Icon>
      <i className="fas fa-circle-notch fa-spin" />
    </Icon>
  )
}
