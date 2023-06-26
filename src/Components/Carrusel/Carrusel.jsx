import React from 'react'
import { Carousel } from 'rsuite';
import logo1 from '../../img/Logo1carrusel.png'
import logo2 from '../../img/Logo2carrusel.png'
import logo3 from '../../img/Logo3carrusel.png'
import logo4 from '../../img/Logo4carrusel.png'
import logo5 from '../../img/Logo5carrusel.png'
import logo6 from '../../img/Logo6carrusel.png'
import logo7 from '../../img/Logo7carrusel.png'
import 'rsuite/dist/rsuite-no-reset.min.css';

import './Carrusel.css'

export default function Carrusel() {
  return (
    <div className='PrincipalV' id='valores'>
      <h1 className='TituloS'><a className='LinkS'>Valores</a></h1>
        <Carousel autoplay className="custom-slider">
        <div className='CuadroV'>
        <img className='logoV' src={logo1} alt="Logo" />
        <p className='TextoV'>Enfoque especialmente en la gestión de back office y BPO, especializados en servicios de valor liderando el sector financiero gestionando sus procesos de negocio.</p>
        </div> 
        <div className='CuadroV'>
        <img className='logoV' src={logo2} alt="Logo" />
        <p className='TextoV'>Gestionamos los servicios del Sector Seguros, dando soporte jurídico a cualquier figura necesaria para ello, somos auxiliares, agentes vinculados, mediadores, proprcionado a las personas implicadas las formaciones necesarias en cada caso</p>
        </div> 
        <div className='CuadroV'>
        <img className='logoV' src={logo3} alt="Logo" />
        <p className='TextoV'>Captamos y retenemos clientes en un entorno cada vez mas competitivo y regulado, y con usuarios ca vez más exigentes, que exigen respuestas rápidas y soluciones adaptadas a sus requerimientos.</p>
        </div> 
        <div className='CuadroV'>
        <img className='logoV' src={logo4} alt="Logo" />
        <p className='TextoV'>Ponemos a disposición de la Administración Pública todos los medios técnicos que presta sus servicios a la ciudadanía.</p>
        </div> 
        <div className='CuadroV'>
        <img className='logoV' src={logo5} alt="Logo" />
        <p className='TextoV'>Ayudamos a nuestros clientes a gestionar sus procesos y metodologías de trabajo consiguiendo una mayor satisfaccion de los usuarios del sector, nuestra especialidad: (venta y atencion al cliente) (Gestion de reservas).</p>
        </div>
        <div className='CuadroV'>
        <img className='logoV' src={logo6} alt="Logo" />
        <p className='TextoV'>Conozca que quiere comprar su cliente, donde lo requiere y en qué momento. reduzca sus excesos de inventario o pronostique el impacto de sus promociones con exactitud a través de nuestros modelos de negocios.</p>
        </div> 
        <div className='CuadroV'>
        <img className='logoV' src={logo7} alt="Logo" />
        <p className='TextoV'>Captamos y retenemos Clientes en un entorno cada vez más competitivo y regulado, y con usuarios cada vez más exigentes e independientes, que exigen respuestas rápidas y soluciones adapstadas a sus requerimientos.</p>
        </div> 
        </Carousel>
    </div>
  )
}
