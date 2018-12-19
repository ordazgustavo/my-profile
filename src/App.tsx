import React from 'react'
import { Router, Location } from '@reach/router'
import { Spring, Transition, config } from 'react-spring'
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

import profilePhoto from './assets/images/profile-square.jpg'

library.add(fas, fab)

const cancelMap = new WeakMap()

export default function App() {
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
        <Spring
          from={{ opacity: 0, transform: 'translateY(-200px)' }}
          to={{ opacity: 1, transform: 'translateY(0)' }}
          config={config.stiff}
          delay={50}
        >
          {props => <ProfileImage src={profilePhoto} style={props} />}
        </Spring>
        <Location>
          {({ location }) => (
            <Transition
              native
              items={location}
              keys={currLocation => currLocation.pathname}
              from={{
                opacity: 0,
                display: 'none',
                transform: 'translateY(150px)',
              }}
              enter={{
                opacity: 1,
                display: 'block',
                transform: 'translateY(0)',
              }}
              leave={{
                display: 'none',
                opacity: 0,
                transform: 'translateY(75px)'
              }}
              // leave={(item: any) => async (next: any, cancel: any) => {
              //   cancelMap.set(item, cancel)
              //   await next({ display: 'none' })
              //   await next({ opacity: 0 })
              //   await next({ transform: 'translateY(75px)' }, true)
              // }}
              config={config.gentle}
            >
              {currLocation => style => (
                <Card style={style}>
                  <Router location={currLocation}>
                    <Home path="/" />
                    <About path="about" />
                    <Projects path="projects" />
                    <Contact path="contact" />
                  </Router>
                </Card>
              )}
            </Transition>
          )}
        </Location>
        <SocialIcons />
      </Content>
    </Layout>
  )
}
