import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'

import {
  Layout,
  Navbar,
  NavItem,
  ProfileImage,
  Card,
  Content
} from 'Components'
import { Home, About, Projects, Contact } from 'Containers'

import { navigation } from 'utilities'
import { contact } from 'personal'

class App extends Component {
  render() {
    return (
      <Layout>
        <header>
          <Navbar>
            {navigation.map(item => (
              <NavItem key={item.id}>
                <NavLink exact={item.exact} to={item.link}>
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </Navbar>
        </header>

        <Content direction="column">
          <ProfileImage src={contact.profilePicture} />
          <Card>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about/" component={About} />
              <Route path="/projects/" component={Projects} />
              <Route path="/contact/" component={Contact} />
            </Switch>
          </Card>
        </Content>
      </Layout>
    )
  }
}

export default App
