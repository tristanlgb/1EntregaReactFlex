import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Home = () => (
  <Container fluid className="p-3">
    <Card className="w-100">
      <Card.Body>
        <Card.Title>Home</Card.Title>
        <Card.Text>
          This is the home page, with a welcoming message for the user.
        </Card.Text>
      </Card.Body>
    </Card>
  </Container>
);

export default Home;
