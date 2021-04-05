import { Button, Container, Row, Col, Form, } from 'react-bootstrap';

const formAligmentStyle = {
  height: '100vh',
  display:  'flex',
  alignItems: 'center',
  flexDirection:  'row',

}


export default function Home() {
  return (
    <>
      <Container style={formAligmentStyle}>

        <Container >
          <Row>
          <Col xs={12} md={6} style={{display: 'flex', alignItems:'center', justifyContent:'center', padding:'20px'}}>
              <h1>
                GAM APP
                
              </h1>
            </Col>
            <Col xs={12} md={6}>
              <h1>Login</h1>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Seu email" />
                  <Form.Text className="text-muted">
                </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" placeholder="Senha" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Entrar
              </Button>
              </Form>
            </Col>

          </Row>
        </Container>
      </Container>
    </>
  )
}
