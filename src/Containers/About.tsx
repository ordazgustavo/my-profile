import React from 'react'
import { RouteComponentProps } from '@reach/router';

import { Certification, Experience } from '../Components'
import { experience, certifications } from '../personal'

export default function About(props: RouteComponentProps) {
  return (
    <React.Fragment>
      <h2>Información Laboral</h2>
      <hr />
      {experience.map(exp => (
        <Experience key={exp.id} {...exp} />
      ))}

      <h2>Educación</h2>
      <hr />
      <div>
        <p>
          <strong>Universidad de Margarita</strong> - Venezuela 2017
        </p>
        <p>Ingeniero de Sistemas</p>
      </div>
      <div>
        <p>
          <strong>Universidad Latina de Panamá</strong> - Panamá 2012
        </p>
        <p>Ingeniero de Telecomunicaciones</p>
      </div>

      <h2>Certificaciones</h2>
      <hr />
      {certifications.map(cert => (
        <Certification key={cert.license} {...cert} />
      ))}
    </React.Fragment>
  )
}
