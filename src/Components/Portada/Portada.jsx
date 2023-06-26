import React from 'react'
import imgP from '../../img/laptop-fondo-blanco4.png'
import './Portada.css'


export default function Portada() {
  return (
    <div className='ContenedorP'>
      <img className='imagenP' src={imgP} alt="portada de la imágen" />
        <div className='textoP' >
        <h1>LOS MEJORES</h1>
        <h1>TALENTOS DE LA</h1>
        <h1>INDUSTRIA CALL CENTER</h1>
        <p>Garantizamos la Presentación de un servicio óptimo por parte del capital humano</p>
        </div>
    </div>
  )
}