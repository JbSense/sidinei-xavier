import React from 'react'

// Components
import Header from '../../../components/Header/Header'

const Home = () => {
  // document.querySelector('.Header').classList.add('background-transparent')

  return (
    <div className='Home'>
      <Header page='home'/>
      <h1>Home</h1>
    </div>
  )
}

export default Home
