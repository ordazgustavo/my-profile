import React, { Fragment } from 'react'

import { Project } from '../Components'
import { projects } from '../personal'

const Projects = () => (
  <Fragment>
    <h3>Proyectos</h3>
    <hr />
    {projects.map(proj => (
      <Project key={proj.id} {...proj} />
    ))}
  </Fragment>
)

export default Projects
