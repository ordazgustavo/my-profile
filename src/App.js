import React, { useState, useEffect } from 'react'
import { Router, Location } from '@reach/router'
import { Transition } from 'react-spring'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { Home, About, Projects, Contact } from './Containers'

import {
  Layout,
  Navbar,
  NavLink,
  ProfileImage,
  Card,
  Content,
  SocialIcons,
} from './Components'

import navigation from './utilities/navigation'

library.add(fas, fab)

export default function App() {
  const [profilePhoto, setProfilePhoto] = useState('')

  useEffect(
    async () => {
      if (!profilePhoto) {
        const config = {
          method: 'GET',
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
          mode: 'cors',
          cache: 'default',
        }
        const response = await fetch(
          'https://api.github.com/users/ordazgustavo',
          config,
        )
        const data = await response.json()
        setProfilePhoto(data.avatar_url)
      }
    },
    [profilePhoto],
  )

  return (
    <Layout>
      <Navbar>
        {navigation.map(item => (
          <li key={item.id}>
            <NavLink to={item.link}>{item.label}</NavLink>
          </li>
        ))}
      </Navbar>

      <Content direction="column">
        <ProfileImage src={profilePhoto} />
        <Card>
          <Location>
            {({ location }) => (
              <Transition
                native
                keys={location.pathname}
                from={{
                  opacity: 0,
                  display: 'none',
                  transform: 'translate3d(100%,0,0)',
                }}
                enter={{
                  opacity: 1,
                  display: 'block',
                  transform: 'translate3d(0%,0,0)',
                }}
                leave={{
                  opacity: 0,
                  display: 'none',
                  transform: 'translate3d(-50%,0,0)',
                }}
              >
                {style => (
                  <Router location={location}>
                    <Home path="/" style={style} />
                    <About path="about" style={style} />
                    <Projects path="projects" style={style} />
                    <Contact path="contact" style={style} />
                  </Router>
                )}
              </Transition>
            )}
          </Location>
        </Card>
        <SocialIcons />
      </Content>
    </Layout>
  )
}
