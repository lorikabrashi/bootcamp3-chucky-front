import withLayouts from '../../HOC/withLayouts'
import {Row, Col} from 'react-bootstrap'
import LoginForm from '../../components/Forms/LoginForm'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {login} from '../../store/slices/authSlice'

const Login = () => {
  const dispatch = useDispatch()
  const onLoginSuccess = (results) => {
    dispatch(login(results))
    
  }

  return (
    <Row>
    <Col md={12}>
      <h1>Login</h1>
    </Col>
    <Col md={6}>
      <LoginForm onSuccess={onLoginSuccess} />
      <NavLink to="/forgot-password">Forgot Password</NavLink>
    </Col>
  </Row>
  )
}

export default withLayouts(Login)
