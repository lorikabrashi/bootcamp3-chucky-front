import React from 'react'
import PublicRoutes from './publicRoutes'
import PrivateRoutes from './privateRoutes'

function AppRoutes() {
  return (
    <>
      <PublicRoutes />
      <PrivateRoutes />
    </>
  )
}

export default AppRoutes
