import React from 'react'
import styled from 'styled-components'

import { maastrichtBlue } from '../utilities'

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  > i {
    color: ${maastrichtBlue};
    font-size: 50px;
  }
`
export default () => (
  <Icon>
    <i className="fas fa-circle-notch fa-spin" />
  </Icon>
)
