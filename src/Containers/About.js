import React, { Fragment } from 'react'

import { Certification, Experience } from '../Components'
import { experience, certifications } from '../personal'

const About = () => (
  <Fragment>
    <h3>Información Laboral</h3>
    <hr />
    {experience.map(exp => (
      <Experience key={exp.id} {...exp} />
    ))}

    <h3>Educación</h3>
    <hr />
    <section>
      <p>INGENIERO DE SISTEMAS - 2017 - UNIVERSIDAD DE MARGARITA</p>
    </section>
    <section>
      <p>
        INGENIERO DE TELECOMUNICACIONES - 2012 - UNIVERSIDAD LATINA DE PANAMÁ
      </p>
    </section>

    <h3>Certificaciones</h3>
    <hr />
    {certifications.map(cert => (
      <Certification key={cert.license} {...cert} />
    ))}
  </Fragment>
)

export default About
