import React from 'react'
import { animated } from 'react-spring'

import { Project } from '../Components'
import { projects } from '../personal'

export default function Projects({ style }) {
  return (
    <animated.div style={style}>
      <h2>Proyectos</h2>
      <hr />
      {projects.map(proj => (
        <Project key={proj.id} {...proj} />
      ))}
    </animated.div>
  )
}
