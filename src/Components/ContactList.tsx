import React from 'react'
import styled from 'styled-components'
import {IconType} from 'react-icons'

import { colors } from '../utilities'

const ListItem = styled.li`
  margin: 10px 0;
  > svg {
    margin-right: 15px;
    color: ${colors.greenSheen};
    width: 20px;
  }
`

interface IProps {
  title: string,
  items: { id: string, icon: IconType, link: string, label: string }[]
}

export default function ContactList({ title, items }: IProps) {
  return (
    <div>
      <p>{title}:</p>
      <ul>
        {items.map(item => (
          <ListItem key={item.id}>
            {item.icon ? <item.icon /> : null}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          </ListItem>
        ))}
      </ul>
    </div>
  )
}
