import React, { useContext } from 'react'
import { AdminContext } from '../../../contexts/admin'

const Teste = () => {
  const { admin } = useContext(AdminContext)

  return (
    <div className='Teste'>
      <h1>Teste</h1>
      <h2>{admin.name}</h2>
    </div>
  )
}

export default Teste
