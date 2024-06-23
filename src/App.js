import React from 'react';
import BankersApp from './BankersApp';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <h1 className="text-center">Banker's Algorithm Simulator</h1>
          </Col>
        </Row>
        <BankersApp />
      </Container>
    </div>
  );
}

export default App;
