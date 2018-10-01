import React from 'react'

import { Project } from '../Components'
import { projects } from '../personal'

const Projects = () => (
  <div>
    <h2>Proyectos</h2>
    <hr />
    {projects.map(proj => (
      <Project key={proj.id} {...proj} />
    ))}
  </div>
)

export default Projects
