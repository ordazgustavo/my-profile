import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { contact } from '../personal'

const Wrapper = styled.div`
  position: sticky;
  bottom: 10px;
  margin-top: 20px;
`

const Item = styled.a`
  font-size: 45px;
  margin: 0 25px;
  color: ${({ color }) => color || 'inherit'};
`

export default () => (
  <Wrapper>
    <Item href={contact.instagram} color="#cd486b" aria-label="Mi Instagram">
      <FontAwesomeIcon icon={['fab', 'instagram']} />
    </Item>
    <Item href={contact.twitter} color="#00aced" aria-label="Mi Twitter">
      <FontAwesomeIcon icon={['fab', 'twitter']} />
    </Item>
    <Item href={contact.github} color="#000" aria-label="Mi Github">
      <FontAwesomeIcon icon={['fab', 'github']} />
    </Item>
  </Wrapper>
)
