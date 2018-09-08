import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'

import {
  Layout,
  Navbar,
  NavItem,
  ProfileImage,
  Card,
  Content,
  SocialIcons
} from './Components'
import Home from './Containers/Home'

import LoadableFactory from './utilities/LoadableFactory'
import { navigation } from './utilities'
import { contact } from './personal'

const AsyncAbout = LoadableFactory({
  loader: () => import('./Containers/About')
})
const AsyncProjects = LoadableFactory({
  loader: () => import('./Containers/Projects')
})
const AsyncContact = LoadableFactory({
  loader: () => import('./Containers/Contact')
})

export default () => (
  <Layout>
    <Navbar>
      {navigation.map(item => (
        <NavItem key={item.id}>
          <NavLink exact={item.exact} to={item.link}>
            {item.label}
          </NavLink>
        </NavItem>
      ))}
    </Navbar>

    <Content direction="column">
      <ProfileImage src={contact.profilePicture} />
      <Card>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about/" component={AsyncAbout} />
          <Route path="/projects/" component={AsyncProjects} />
          <Route path="/contact/" component={AsyncContact} />
        </Switch>
      </Card>
      <SocialIcons />
    </Content>
  </Layout>
)
