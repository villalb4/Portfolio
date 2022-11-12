import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
      <div className='header_content'>
        <div className='header_divContentLeft'>
          <span className='logo'>VILLALBA</span>
          <nav>
            <span className='header_span1'>sobre mi</span>
            <span className='header_span2'>proyectos</span>
          </nav>
        </div>
        <div className='header_divContentRight'>
          <button>resumen</button>
        </div>
      </div>
    </header>
  )
}

export default Header