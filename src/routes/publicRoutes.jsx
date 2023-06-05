import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from './routesData'

const PublicRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map((elem, index) => {
        return <Route key={index} element={elem.element} path={elem.path} />
      })}
    </Routes>
  )
}

export default PublicRoutes
