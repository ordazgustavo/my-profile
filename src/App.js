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

const routes = [
  {
    id: 'home',
    component: Home,
    path: '/',
  },
  {
    id: 'about',
    component: About,
    path: 'about',
  },
  {
    id: 'projects',
    component: Projects,
    path: 'projects',
  },
  {
    id: 'contact',
    component: Contact,
    path: 'contact',
  },
]

export default function App() {
  const [profilePhoto, setProfilePhoto] = useState('')

  useEffect(
    () => {
      if (!profilePhoto) {
        const config = {
          method: 'GET',
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
          mode: 'cors',
          cache: 'default',
        }
        fetch('https://api.github.com/users/ordazgustavo', config).then(
          response =>
            response.json().then(data => setProfilePhoto(data.avatar_url)),
        )
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
                items={routes}
                keys={item => item.id}
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
                {item => style => (
                  <Router location={location}>
                    <item.component path={item.path} style={style} />
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
