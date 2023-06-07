import { Route, Routes } from 'react-router-dom'
import { privateRoutes } from './routesData'

const PublicRoutes = () => {
  // check if i don't have token 
  // if true
    // redirect to home
     
  return (
    <Routes>
      {privateRoutes.map((elem, index) => {
        return <Route key={index} element={elem.element} path={elem.path} />
      })}
    </Routes>
  )
}

export default PublicRoutes
