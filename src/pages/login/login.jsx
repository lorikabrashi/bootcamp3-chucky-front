import withLayouts from '../../HOC/withLayouts'
import {Row, Col} from 'react-bootstrap'
import LoginForm from '../../components/Forms/LoginForm'
import { NavLink } from 'react-router-dom'
const Login = () => {

  const onLoginSuccess = (results) => {
    console.log(results)
    alert('logged in')
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
