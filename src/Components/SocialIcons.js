import React from 'react'
import styled from 'styled-components'

import { contact } from '../personal'

const Wrapper = styled.div`
  position: sticky;
  bottom: 10px;
  margin-top: 20px;
`

const Item = styled.a`
  font-size: 45px;
  margin: 0 25px;
`

export default () => (
  <Wrapper>
    <Item href={contact.instagram} aria-label="Mi Instagram">
      <i style={{ color: '#cd486b' }} className="fab fa-instagram" />
    </Item>
    <Item href={contact.twitter} aria-label="Mi Twitter">
      <i className="fab fa-twitter" />
    </Item>
    <Item href={contact.github} aria-label="Mi Github">
      <i style={{ color: '#000' }} className="fab fa-github" />
    </Item>
  </Wrapper>
)
