import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import Loadable from 'react-loadable'

import {
  Loading,
  Layout,
  Navbar,
  NavItem,
  ProfileImage,
  Card,
  Content,
  SocialIcons
} from './Components'
import { Home } from './Containers'

import { navigation } from './utilities'
import { contact } from './personal'

const AsyncAbout = Loadable({
  loader: () => import('./Containers/About'),
  loading: Loading
})
const AsyncProjects = Loadable({
  loader: () => import('./Containers/Projects'),
  loading: Loading
})
const AsyncContact = Loadable({
  loader: () => import('./Containers/Contact'),
  loading: Loading
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
