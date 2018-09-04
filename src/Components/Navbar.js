import React from 'react'
import styled from 'styled-components'
import { colors, elevation, transition } from 'utilities'

const Bar = styled.div`
  width: 100%;
  height: 65px;
  background: ${colors.maastrichtBlue};
  ${elevation[4]};
`

const ItemWrapper = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavItem = styled.li`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  > a {
    color: ${colors.tealBlue};
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    ${transition({ property: 'border' })};
  }
  > a:hover {
    border-bottom: 5px solid ${colors.tealBlue};
  }
  > a:hover,
  a.active {
    color: ${colors.cambridgeBlue};
  }
`

export const Navbar = ({ children }) => (
  <Bar>
    <ItemWrapper>{children}</ItemWrapper>
  </Bar>
)