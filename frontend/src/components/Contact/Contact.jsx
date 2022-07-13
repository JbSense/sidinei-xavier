import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

// Components
import Input from '../Input/Input'

function Contact () {
  return (
    <div className="Contact">
      <div className="Contact__left-side">
        <h1 className='left-side__title'>Tem algo para me falar?</h1>

        <p className='left-side__text'>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus B
          onorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
          treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem
          Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.</p>

        <div className='left-side__social-media'>
          <Link to='#'><img src='assets/icons/facebook.png' alt='' /></Link>
          <Link to='#'><img src='assets/icons/instagram.png' alt='' /></Link>
          <Link to='#'><img src='assets/icons/whatsapp.png' alt='' /></Link>
        </div>
      </div>

      <form action='' className='Contact__right-side'>
        <Input
          name='name'
          type='text'
          label='Nome'
        />
        <Input
          name='email'
          type='email'
          label='E-mail'
        />
        <Input
          name='phone'
          type='number'
          label='Número'
        />
        <textarea name='message' cols='30' rows='5' className='right-side__message' placeholder='Mensagem'></textarea>
      </form>
    </div>
  )
}

export default Contact
