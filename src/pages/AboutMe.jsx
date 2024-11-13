import React from 'react';
import { Card, Container } from 'react-bootstrap';

const AboutMe = () => (
  <Container fluid className="p-3">
    <Card className="w-100">
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <Card.Text>
          This page contains information about the creator of this app.
        </Card.Text>
      </Card.Body>
    </Card>
  </Container>
);

export default AboutMe;
