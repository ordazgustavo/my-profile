import React from 'react'

import { Project } from '../Components'
import { projects } from '../personal'

export default function Projects() {
  return (
    <React.Fragment>
      <h2>Proyectos</h2>
      <hr />
      {projects.map(proj => (
        <Project key={proj.id} {...proj} />
      ))}
    </React.Fragment>
  )
}
