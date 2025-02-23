import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => (
  <footer className="bg-dark py-4">
    <Container>
      <Row>
        <Col>
          <p className="text-center text-secondary">&copy; 2020. SSIPR. Hakcipta Terpelihara.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
