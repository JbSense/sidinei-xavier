import React from 'react'
import './styles.css'

// Components
import Nav from '../Nav/Nav'

function Header (props) {
  let menuNav = 'closed'

  const openMenuNav = () => {
    if (menuNav === 'closed') {
      document.querySelector('.Header').classList.add('nav-open')
      menuNav = 'open'
    } else {
      document.querySelector('.Header').classList.remove('nav-open')
      menuNav = 'closed'
    }
  }

  const background = props.background !== undefined ? props.background : 'dark'

  return (
    <div className={'Header ' + background}>
      <h1 className='Header__name'>Sidinei Xavier</h1>
      <div className='Header__menu-toggle' onClick={openMenuNav}>
        <span className='menu-toggle__top-line'></span>
        <span className='menu-toggle__bottom-line'></span>
      </div>

      <Nav />
    </div>
  )
}

export default Header
