import React from 'react'
import { RouteComponentProps } from '@reach/router';

import { Project } from '../Components'
import { projects } from '../personal'

export default function Projects(props: RouteComponentProps) {
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
