import React, { useContext } from 'react'
import Header from '../../../components/Header/Header'
import { AdminContext } from '../../../contexts/admin'

const Teste = () => {
  const { admin } = useContext(AdminContext)

  return (
    <div className='Teste'>
      <Header />
      <h1>Teste</h1>
      <h2>{admin.name}</h2>
    </div>
  )
}

export default Teste
