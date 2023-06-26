import React from 'react'
import './Somos.css'
import Panel from '../Panel/Panel'
export default function Somos() {
  return (
    <div className='ContenedorS' id='somos'>
      <h1 className='TituloS'><a className='LinkS'>Quienes Somos...</a></h1>
      <div className='textoS'>
      <p className='ContenidoS'>
        Somos D&C Digital Group, una empresa proveedora de servicios Call Center, con más de 11 años de experiencia en el sector.
        Contamos con más de 200 colaboradores y un amplio ecosistema de soluciones comerciales. Somos un aliado sólido en la comercialización de los mismos.
        A través de los años, gracias a nuestro equipo de profesionales altamente cualificados nos hemos consolidado como expertos en el rubro de televentas, creando y fidelizando clientes.
      </p>
      <div className='Cuadros'>
          <Panel/>
      </div>
      </div>
    </div>
  )
}