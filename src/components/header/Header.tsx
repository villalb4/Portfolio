import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <header>
      <div className='header_content'>
        <nav>
          <span className='header_navSpan'>sobre mi</span>
          <span className='header_navSpan'>proyectos</span>
          <span className='header_navSpan'>contacto</span>
          <div>
            <span className='header_idomaSpan'>es</span>
          </div>
        </nav>
        <div className='header_divLogo'>
          <div className='header_divBorderLogo'>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className='header_divhorario'>
          <span className='header_horarioSpan'>04:52</span>
        </div>
      </div>
    </header>
  )
}

export default Header