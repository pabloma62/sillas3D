import React from 'react'
import { Pablito } from '../styles/styles'

export default function Header () {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>VENTA ONLINE 3D</div>
        <Pablito>dev by: Pablo Mañas Izquierdo</Pablito>
        <nav>
          <ul>
            <li>
              <a href='/'>descubre...</a>
            </li>
            <li>
              <a href='/'>productos</a>
            </li>
            <li>
              <a href='/'>localización</a>
            </li>
            <li>
              <a href='/'>contáctanos</a>
            </li>
            <li className='btn'>
              <a href='/'>Comprar</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
