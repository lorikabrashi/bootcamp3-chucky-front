import { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { ENDPOINTS, apiCall } from '../../lib/Api'
function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessages, setErrorMessages] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = []
    if (!email) {
      errors.push('Email cannot be empty!')
    }
    if (!password) {
      errors.push('Password cannot be empty!')
    }
    if (errors.length) {
      setErrorMessages(errors)
      return
    }
    const data = {
      email,
      password,
    }
    const response = await apiCall(ENDPOINTS.login, { data })
    if (response.confirm) {
      onSuccess(response.results)
    } else {
      setErrorMessages(['Something Went wrong!'])
    }
  }

  return (
    <>
      {errorMessages.length > 0 && (
        <Alert variant="danger">
          {errorMessages.map((elem, index) => (
            <p key={index}>{elem}</p>
          ))}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default LoginForm
