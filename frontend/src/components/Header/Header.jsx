import React from 'react'
import './styles.css'

// Components
import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <div className='Header'>
      <h1 className='Header__name'>Sidinei Xavier</h1>
      <Nav />
    </div>
  )
}

export default Header
