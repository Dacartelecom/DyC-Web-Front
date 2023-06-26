import React, { useCallback, useRef, useState } from 'react'
import logo1 from '../../img/Logo1carrusel.png'
import '../../img/Logo2carrusel.png'
import '../../img/Logo3carrusel.png'
import '../../img/Logo4carrusel.png'
import '../../img/Logo5carrusel.png'
import '../../img/Logo6carrusel.png'
import '../../img/Logo7carrusel.png'
import './SliderShow.css'
import {number} from './SliderShow'
import { ArrowRight2 } from 'iconsax-react';
import { ArrowLeft2 } from 'iconsax-react';
import { QuoteUp } from 'iconsax-react';
import { QuoteDown } from 'iconsax-react';


const SilderShow=()=> {
  const[current,setCurrent]=useState(1)
  const length = number.length;

  const nextSlide=()=>{
    setCurrent(current==length-1? 0:current+1)
  }
  if(!Array.isArray(number)|| number.length<=0){
    return null;
  }

  const prevSlide=()=>{
    setCurrent(current==0? length-1:current-1)
  }
  const moveDot=index=>{
    setCurrent(index)
  }
  return (
    <div className='Carrusel'>
            <h1 className='TituloS'><a className='LinkS'>Valores</a></h1>
    <div className='Container'>
    <ArrowLeft2 className='Arrow'  onClick={prevSlide} />
      <div className='slider_container'>
        <div className='slider'>
        {
          number.map((Slide,index)=>{
            return(
                      index===current&&(<div className={current === index? 'textS ':'textS textS-active'}>
                        <img className='logo' src={Slide.logo} alt="" />
                        <div className='ParrafS'>
                        <p>{Slide.cName}</p>
                        </div>
                      </div>)
            )
          })
        }
        </div>
        <div className="container-dots">
        {Array.from({length:7}).map((item,index)=>(
          <div onClick={()=>moveDot(index)} className={current ===index? 'dot-active':'dot'}></div>
        ))}
      </div>
      </div>

      <ArrowRight2 className='Arrow' onClick={nextSlide}/>
    </div>
    </div>
  )
}
export default SilderShow;
