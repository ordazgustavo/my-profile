import React from 'react'
import { Router, RouteComponentProps } from '@reach/router'
import { useSpring, useTransition, config } from 'react-spring'

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

export default function App({ location }: RouteComponentProps) {
  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-200px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  })

  const transitions = useTransition(location, item => item.pathname, {
    from: {
      opacity: 0,
      display: 'none',
      transform: 'translateY(150px)',
    },
    enter: {
      opacity: 1,
      display: 'block',
      transform: 'translateY(0)',
    },
    leave: {
      display: 'none',
      opacity: 0,
      transform: 'translateY(75px)',
    },
    config: config.gentle,
  })

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
        <ProfileImage src={profilePhoto} style={springProps} />
        {transitions.map(({ item, props, key }) => (
          <Card key={key} style={props}>
            <Router location={item}>
              <Home path="/" />
              <About path="about" />
              <Projects path="projects" />
              <Contact path="contact" />
            </Router>
          </Card>
        ))}
        <SocialIcons />
      </Content>
    </Layout>
  )
}
