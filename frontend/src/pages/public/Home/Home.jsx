import React from 'react'
import './styles.css'

// Components
import Header from '../../../components/Header/Header'

const Home = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      console.log('osak')
      document.querySelector('.Header').classList.remove('transparent')
    } else {
      document.querySelector('.Header').classList.add('transparent')
    }
  })

  return (
    <div className='Home'>
      <Header background='transparent'/>
      <h1>Home</h1>
    </div>
  )
}

export default Home
