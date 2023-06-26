import React from 'react'
import Image from '../../img/t7.jpg'
import video from '../../img/file.mp4'
import './Satisfaccion.css'

export default function Satisfaccion() {
  return (
    <div className='contenedor'>
      <h1 className='TituloS'><a className='LinkS'>SATISFACCIÓN DEL 100% EN CALIDAD DE SERVICIO</a></h1>
      <div className='SatisfaccionS'>
      <div className='Texto'>
      <p className='contenidoS'>
      " Digital Group está compuesto por un equipo talentoso, capacitado y eficiente que vela por garantizar la prestación de un servicio óptimo por parte del capital humano que dentro del centro de contacto interactúa con los clientes de nuestros clientes.

      Los objetivos de nuestros clientes son nuestros objetivos y por eso brindamos las mejores soluciones del mercado.

      Tenemos una amplia gama de soluciones comerciales flexibles para todo tipo de negocios. Usamos lo último en tecnología y personal altamente calificado para lograr los mejores resultados de calidad.  "    
      </p>
      <div className='CardS'>
        <img src={Image} alt="Gerente" className='imgS'/>
        <div className='DatosS'>
        <p className='NombreS'>David Granda</p>
        <p className='CargoS'>Gerente - Digital Group</p>
        </div>
      </div>
      </div>
        <video src={video} autoPlay loop />
      </div>
    </div>
  )
}