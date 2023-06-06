import withLayouts from '../../HOC/withLayouts'
import {Row, Col} from 'react-bootstrap'
import LoginForm from '../../components/Forms/LoginForm'
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
    </Col>
  </Row>
  )
}

export default withLayouts(Login)
