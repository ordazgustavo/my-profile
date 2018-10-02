import styled from 'styled-components'

import { elevation, transition, colors } from '../utilities'

const Card = styled.div`
  background: white;
  border-radius: 15px;
  padding: 50px;
  box-sizing: border-box;
  width: 90%;
  min-height: 276px;
  max-width: 700px;
  color: ${colors.black};
  overflow: hidden;
  ${elevation[4]};
  ${transition({ property: 'box-shadow' })};
  &:hover {
    ${elevation[5]};
  }
`

export default Card
