import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

function Footer () {
  return (
    <footer className='Footer'>
      <h1 className='Footer__name'>Sidinei Xavier</h1>

      <div className='Footer__social-media'>
        <p className='social-media__title'>Redes sociais</p>

        <ul className='social-media__links'>
          <li><Link to='#'>Facebook</Link></li>
          <li><Link to='#'>Instagram</Link></li>
          <li><Link to='#'>WhatsApp</Link></li>
        </ul>
      </div>

      <p className='Footer__easy-web'>Easy Web @2022</p>
    </footer>
  )
}

export default Footer
