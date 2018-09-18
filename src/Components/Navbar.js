import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors, elevation, media } from '../utilities'
import logo from '../assets/images/OGLight.png'

const Bar = styled.header`
  background: ${colors.maastrichtBlue};
  ${elevation[4]};
  z-index: 2;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  position: fixed;
  flex-wrap: wrap;
  top: 0;
  width: 100%;
  ${media.tablet`
    flex-direction: row;
  `} &:hover {
    h1 {
      transform: translate3d(110px, 0, 0);
      transition: 0.3s all cubic-bezier(0.165, 0.84, 0.44, 1);
    }
  }
`

const SiteNav = styled.nav`
  > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    > li {
      margin: 0;
    }
  }
`

const NavLogo = styled(Link)`
  text-decoration: none;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  padding: 15px 10px 18px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 5px;
  display: block;
  transition: all 0.3s ease;
  ${media.tablet`
    font-size: 16px;
    padding: 15px 20px 18px;
  `} &:hover {
    border-bottom: 4px solid ${props => props.underline};
  }
`

const Name = styled.h1`
  margin: 0;
  top: 0;
  position: absolute;
  display: none;
  z-index: 5;
  transform: translate3d(-100%, 0, 0);
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 5px;
  font-size: 24px;
  text-decoration: none;
  font-weight: 900;
  line-height: 52px;
  color: #fff;
  transition: 0.3s, all, cubic-bezier(0.895, 0.03, 0.685, 0.22);
  ${media.tablet`display: block;`};
`

export const Navbar = ({ children }) => (
  <Bar>
    <NavLogo to="/">
      <img src={logo} alt="" />
      <Name>Gustavo Ordaz</Name>
    </NavLogo>
    <SiteNav>
      <ul>{children}</ul>
    </SiteNav>
  </Bar>
)
