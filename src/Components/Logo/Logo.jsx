import React from 'react'
import './Logo.css'

export default function Logo({img}) {
  return (
    <div className='Components'>
    <img className='ImagenL' src={img} alt="imagen dyc" />      
    </div>
  )
}