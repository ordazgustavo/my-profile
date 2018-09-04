import styled from 'styled-components'
import { elevation } from 'utilities'

const ProfileImage = styled.img`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  ${elevation[2]};
`

export default ProfileImage
