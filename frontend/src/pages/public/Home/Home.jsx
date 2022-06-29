import React, { useContext } from 'react'
import { AdminContext } from '../../../contexts/admin'

const Home = () => {
  const { admin } = useContext(AdminContext)

  return (
    <div className='Home'>
      <h1>Home</h1>
      <h2>{admin.name}</h2>
    </div>
  )
}

export default Home
