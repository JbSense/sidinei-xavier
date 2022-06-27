import React from 'react'
import { Navigate } from 'react-router-dom'
// import { AuthAdminContext } from '../../contexts/authAdmin'

function Private (page) {
  const pass = 123

  if (pass !== 123) {
    return <Navigate to='login-admin'/>
  }

  return page
}

export default Private
