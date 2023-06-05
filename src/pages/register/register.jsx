import withLayouts from '../../HOC/withLayouts'
import { Row, Col } from 'react-bootstrap'
import RegisterForm from '../../components/Forms/RegisterForm'
import { useState } from 'react'
const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false)

  return (
    <Row>
      <Col md={12}>
        <h1>Register</h1>
      </Col>
      <Col md={6}>
        {isRegistered ? (
          <h1>Please Verify your account</h1>
        ) : (
          <RegisterForm
            setRegistered={() => {
              setIsRegistered(true)
            }}
          />
        )}
      </Col>
    </Row>
  )
}
export default withLayouts(Register)
