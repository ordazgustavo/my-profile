import React from 'react'

import { Project } from '../Components'
import { projects } from '../personal'

const Projects = () => (
  <div>
    <h3>Proyectos</h3>
    <hr />
    {projects.map(proj => (
      <Project key={proj.id} {...proj} />
    ))}
  </div>
)

export default Projects
