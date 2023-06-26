import React from 'react'
import "./Header.css";


export default function Header() {
    
  return (
    <div className='contenedorH'> 
    <ul class="navbar-menu">
      <li class="navbar-item"><a href="#somos" className="navbar-link">Somos</a></li>
      <li class="navbar-item"><a href="#valores" className="navbar-link">Valores</a></li>
      <li class="navbar-item"><a href="#servicios" className="navbar-link">Servicios</a></li>
    </ul>
    </div>
  )
}