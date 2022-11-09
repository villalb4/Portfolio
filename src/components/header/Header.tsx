import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
      <div className='header_content'>
        <span className='logo'>villalba</span>
        <nav>
          <span>sobre mi</span>
          <span>proyectos</span>
          <span>contacto</span>
        </nav>
      </div>
    </header>
  )
}

export default Header