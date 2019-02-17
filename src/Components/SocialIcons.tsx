import React from 'react'
import styled from 'styled-components'
import { FiInstagram, FiTwitter, FiGithub } from 'react-icons/fi'

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

export default function SocialIcons() {
  return (
    <Wrapper>
      <Item href={contact.instagram} color="#cd486b" aria-label="Mi Instagram">
        <FiInstagram />
      </Item>
      <Item href={contact.twitter} color="#00aced" aria-label="Mi Twitter">
        <FiTwitter />
      </Item>
      <Item href={contact.github} color="#000" aria-label="Mi Github">
        <FiGithub />
      </Item>
    </Wrapper>
  )
}
