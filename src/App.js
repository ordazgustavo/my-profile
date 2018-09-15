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

import { navigation, animations } from './utilities'
import { contact } from './personal'

library.add(fas, fab)

class App extends Component {
  state = {
    prevHeight: '100px'
  }

  componentDidUpdate(prevProps, prevState) {
    const { height } = getComputedStyle(this.wrapper.firstChild)
    const { prevHeight } = this.state
    if (height !== prevHeight) {
      animations.fluidHeight(this.wrapper, prevHeight, height)

      if (height !== prevState.prevHeight) {
        this.setState({
          prevHeight: height
        })
      }
    }
  }

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
          <Card
            innerRef={wrapper => {
              this.wrapper = wrapper
            }}
          >
            <div style={{ overflow: 'hidden' }}>
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
            </div>
          </Card>
          <SocialIcons />
        </Content>
      </Layout>
    )
  }
}

export default App
