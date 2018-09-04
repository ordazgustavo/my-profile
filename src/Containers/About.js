import React, { Fragment } from 'react'

import { Certification } from 'Components'
import { certifications } from 'personal'

export default () => {
  return (
    <Fragment>
      <h3>Información Laboral</h3>
      <hr />
      <section>
        <p>
          <strong>Urbaner</strong>
          <br />
          <small>Front-end Developer - mayo de 2018 - Presente</small>
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
          repudiandae provident praesentium dicta perspiciatis, sapiente fuga
          in et natus quasi dolor odio earum molestias sint esse accusantium
          voluptates id inventore!
        </p>
      </section>
      <section>
        <p>
          <strong>Cambista Online</strong>
          <br />
          <small>
            Full-stack Developer at agosto de 2017 - abril de 2018 (9 meses)
          </small>
        </p>
        <p>
          Encargado de la administración y mantenimiento del sistema,
          implementación de nuevas características, mejoras de las existentes.
          Mantenimiento del servidor. Realizada actividad de migración de
          servidor. Encargado del desarrollo de SAVIO, aplicación web
          desarrollada con React que permite la búsqueda del mejor tipo de
          cambio de forma automática según los requerimientos del usuario.
        </p>
      </section>

      <section>
        <p>
          <strong>Polimaneiro</strong>
          <br />
          <small>Pasante febrero de 2017 - mayo de 2017 (4 meses)</small>
        </p>
        <p>
          Realizada actividad de pasantía como requisito para optar por el
          título de Ingeniero de Sistemas, en la cual se desarrolló un sistema
          automatizado de entorno web llamado SAGA a ser implantado en los
          departamentos de RRHH, Parque de Armas, Sala de Evidencias y
          Transporte y Logística. Cada módulo cuenta con características que le
          permiten a los directivos de dichos departamento un manejo eficiente
          del mismo
        </p>
      </section>

      <section>
        <p>
          <strong>ENGINEXT Corporation</strong>
          <br />
          <small>
            Administrador de base de datos at febrero de 2016 - mayo de 2016 (4
            meses)
          </small>
        </p>
        <p>
          Gestión y mantenimiento de la Base de Datos del sistema e-Talent.
          Implementadas mejoras en el sistema de codificación de los resume,
          así como revisión de la operatividad del sistema, identificando áreas
          de mejora y eventuales fallas, durante la fase de implementación.
          Este sistema permite controlar la totalidad de la operación básica de
          la empresa, desde la recepción de ordenes de compra, reclutamiento y
          selección de personal, estimación de tarifas, contratación,
          colocación y seguimiento de las asignaciones laborales.
        </p>
      </section>

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
}
