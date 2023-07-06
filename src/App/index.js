import React from 'react';
import Form from './Form';
import ActualDate from './ActualDate';
import { Container } from "./styled";

function App() {
  return (
    <Container>
      <ActualDate />
      <Form />
    </Container>
  );
}

export default App;
