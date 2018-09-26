import React from 'react'
import { Router, Location } from '@reach/router'
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const transitionMs = 300

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.1;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity ${transitionMs}ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    display: none;
  }
`

const FadeTransitionRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <TransitionGroup component={Wrapper}>
        <CSSTransition
          key={location.key}
          timeout={{ enter: transitionMs }}
          mountOnEnter
          unmountOnExit
          classNames="fade"
          onEnter={() => {
            window.scroll({
              top: 0,
              behavior: 'instant'
            })
          }}
        >
          <Router location={location} className="router">
            {children}
          </Router>
        </CSSTransition>
      </TransitionGroup>
    )}
  </Location>
)

export default FadeTransitionRouter
