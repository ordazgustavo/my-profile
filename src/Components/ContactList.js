import React from 'react'
import styled from 'styled-components'

import { colors } from '../utilities'

const ListItem = styled.li`
  margin: 10px 0;
  > i {
    margin-right: 15px;
    color: ${colors.greenSheen};
    width: 20px;
  }
`

export default ({ title, items }) => (
  <div>
    <p>{title}:</p>
    <ul>
      {items.map(item => (
        <ListItem key={item.id}>
          {item.icon ? <i className={item.icon} /> : null}
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {item.label}
          </a>
        </ListItem>
      ))}
    </ul>
  </div>
)
