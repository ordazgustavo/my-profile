import React from 'react'
import styled from 'styled-components'

import { contact } from 'personal'

const Wrapper = styled.div`
  position: sticky;
  bottom: 10px;
  margin-top: 20px;
`

const Item = styled.a`
  font-size: 45px;
  margin: 0 25px;
`

export default () => {
  return (
    <Wrapper>
      <Item href={contact.instagram}>
        <i style={{ color: '#cd486b' }} className="fab fa-instagram" />
      </Item>
      <Item href={contact.twitter}>
        <i className="fab fa-twitter" />
      </Item>
      <Item href={contact.github}>
        <i style={{ color: '#000' }} className="fab fa-github" />
      </Item>
    </Wrapper>
  )
}
