import React from 'react'
import styled from 'styled-components'
import { colors, elevation } from 'utilities'

const Bar = styled.div`
  width: 100%;
  height: 65px;
  background: ${colors.maastrichtBlue};
  ${elevation[4]};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const ItemWrapper = styled.ul`
  height: 100%;
  width: 30%;
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavItem = styled.li`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  > a {
    color: ${colors.azureishWhite};
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > a:hover,
  a.active {
    background: ${colors.tealBlue};
  }
`

export const Navbar = ({ children }) => (
  <Bar>
    <ItemWrapper>{children}</ItemWrapper>
  </Bar>
)
