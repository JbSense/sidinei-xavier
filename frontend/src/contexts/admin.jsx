import React, { useState, createContext } from 'react'

export const AdminContext = createContext()

// eslint-disable-next-line react/prop-types
export const AdminProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [admin, setAdmin] = useState({
    name: 'Sukuna Ryomena'
  })

  // setAdmin({ name: 'Sukuna Ryomena' })

  return (
    <AdminContext.Provider value={{ authenticated: !!admin, admin }}>
      {children}
    </AdminContext.Provider>
  )
}
