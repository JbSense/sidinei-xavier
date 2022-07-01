import React from 'react'
import './styles.css'

const Nav = () => {
  return (
    <div className='Nav'>
      <ul className='Nav__links'>
        <li>Sobre</li>
        <li>Projetos</li>
        <li>Notícias</li>
        <li>Contato</li>
      </ul>

      <div className="Nav__menu-toggle">
        <span></span>
      </div>
    </div>
  )
}

export default Nav
