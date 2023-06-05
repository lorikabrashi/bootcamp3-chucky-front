import Header from '../layouts/header'
import Footer from '../layouts/footer'
import { Container } from 'react-bootstrap'
const withLayouts = (Component, data = 'public') => {
  return (props) => {
    return (
      <>
        {data === 'auth' ? <h1>AuthLogin</h1> : <Header />}
        <Container>
          <Component {...props} />
        </Container>
        <Footer />
      </>
    )
  }
}
export default withLayouts
