import React from 'react'
import './styles.css'

const Nav = () => {
  const menuNav = 'closed'

  const openMenuNav = () => {
    if (menuNav === 'closed') {
      document.querySelector('menu-toggle__top-line').style.transform = 'translateY(0)'
      document.querySelector('menu-toggle__bottom-line').style.transform = 'translateY(0)'
    }
    console.log('aqui')
  }

  return (
    <div className='Nav'>
      <ul className='Nav__links'>
        <li>Sobre</li>
        <li>Projetos</li>
        <li>Notícias</li>
        <li>Contato</li>
      </ul>

      <div className='Nav__menu-toggle' onClick={openMenuNav}>
        <span className='menu-toggle__top-line'></span>
        <span className='menu-toggle__bottom-line'></span>
      </div>
    </div>
  )
}

export default Nav
