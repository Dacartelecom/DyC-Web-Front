import React from 'react';
import './Footer2.css';
import { Facebook } from 'iconsax-react';
import img from '../../img/logoDyC-2.png'
import { Instagram } from 'iconsax-react';
import { Location } from 'iconsax-react';
import { CallCalling } from 'iconsax-react';
import ButtonTop from '../ButtonTop/ButtonTop';



export default function Footer2() {
  const style={
    marginTop:'3em'
  };
  return (
    <div className='footer'>
      <div className='sd_footer secction_padding'>
        <div className='sb_footer-links'>
          <div className='sb_footer-links_div'>
            <img className='ImagenF' src={img} alt="imagen dyc"/>
          </div>
          <div className='sb_footer-links_div'>
          <div className='Direccion'> 
          <p><Location className='logo' size="40" color="#d9e3f0"/></p><h4> DIRECCIÓN </h4> </div>
            <p>Av. Jose Santos Chocano 822, Los olivos</p>
          </div>
          <div className='sb_footer-links_div'>
          <div className='Telefono'> 
          <p><CallCalling className='logo' size="30" color="#d9e3f0"/></p><h4>TELÉFONO</h4>
          </div>
            <a className='LinkF' href="tel:963470072">
              <p>963 470 072</p>
            </a>
          </div>
          <div className='sb_footer-links_div'>
          <div className='Correo'> 
          <p><i class="fa fa-envelope logo"></i></p><h4 style={style}>CORREO</h4>
          </div>
            <a className='LinkF' href="mailto:marketing@digitalgroup.com.pe">
              <p>marketing@digitalgroup.com.pe</p>
            </a>
          </div>
          <div className='sb_footer-links_div'>
          <h4>SÍGUENOS</h4>
          <div className='socialmedia'>
          <p>
            <a href="https://www.facebook.com/DyCDigitalGroup/">
          <Facebook className='logo' size="64" color="#2ccce4" variant="Outline"/>
          </a></p>
          <p>
            <a href="https://www.instagram.com/DyC.DigitalGroup/">
              <Instagram className='logo' size="64" color="#2ccce4"/></a>
          </p>
          <p>
            <a href="https://www.linkedin.com/company/dycdigitalgroup/">
            <i class="fa fa-linkedin-square logo logol"></i>
          </a></p>
          </div>
          </div>
        </div>
        <hr></hr>
        <div className='sb_footer-below'>
          <div className='sb_footer-copyright'>

            <p>
              @{new Date().getFullYear()}. Todos los derechos reservados.
            </p>
            <div className='sb_footer-below-links'>
            <ButtonTop/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
