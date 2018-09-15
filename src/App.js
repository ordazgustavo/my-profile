import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import {
  Layout,
  Navbar,
  NavItem,
  ProfileImage,
  Card,
  Content,
  SocialIcons
} from './Components'

import { navigation } from './utilities'
import { contact } from './personal'

library.add(fas, fab)

class App extends Component {
  onMouseOverHandler = component => () =>
    component.preload instanceof Function && component.preload()

  render() {
    return (
      <Layout>
        <Navbar>
          {navigation.map(item => (
            <NavItem
              key={item.id}
              onFocus={this.onMouseOverHandler(item.component)}
              onMouseOver={this.onMouseOverHandler(item.component)}
            >
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
              {navigation.map(route => (
                <Route
                  key={route.id}
                  exact={route.exact}
                  path={route.link}
                  component={route.component}
                />
              ))}
            </Switch>
          </Card>
          <SocialIcons />
        </Content>
      </Layout>
    )
  }
}

export default App
