import React, { Component } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { Home, AsyncAbout, AsyncProjects, AsyncContact } from './Containers'

import {
  Layout,
  Navbar,
  NavLink,
  ProfileImage,
  Card,
  Content,
  SocialIcons
} from './Components'

import { contact } from './personal'
import navigation from './utilities/navigation'
import FadeTransitionRouter from './utilities/FadeTransitionRouter'

library.add(fas, fab)

class App extends Component {
  state = {
    profilePhoto: ''
  }

  componentDidMount() {
    const { profilePhoto } = this.state

    if (!profilePhoto) {
      const miInit = {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.github.v3+json'
        },
        mode: 'cors',
        cache: 'default'
      }
      fetch('https://api.github.com/users/ordazgustavo', miInit).then(
        response => {
          response.json().then(data => {
            this.setState({ profilePhoto: data.avatar_url })
          })
        }
      )
    }
  }

  preloadComp = component => () =>
    typeof component === 'function' ? component.preload() : undefined

  render() {
    const { profilePhoto } = this.state

    return (
      <Layout>
        <Navbar>
          {navigation.map(item => (
            <li key={item.id}>
              <NavLink
                to={item.link}
                onMouseOver={this.preloadComp(item.component)}
                onFocus={this.preloadComp(item.component)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </Navbar>

        <Content direction="column">
          <ProfileImage src={profilePhoto} />
          <Card
            innerRef={wrapper => {
              this.wrapper = wrapper
            }}
          >
            <FadeTransitionRouter>
              <Home path="/" />
              <AsyncAbout path="about" />
              <AsyncProjects path="projects" />
              <AsyncContact path="contact" />
            </FadeTransitionRouter>
          </Card>
          <SocialIcons />
        </Content>
      </Layout>
    )
  }
}

export default App
