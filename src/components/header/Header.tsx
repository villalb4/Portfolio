import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
      <div className='header_content'>
        <div className='headerC_divLeft'>
          <span className='logo'>VILLALBA</span>
          <nav>
            <span>sobre mi</span>
            <span>proyectos</span>
          </nav>
        </div>
        <div className='headerC_divRight'>
          <button>resumen</button>
        </div>
      </div>
    </header>
  )
}

export default Header