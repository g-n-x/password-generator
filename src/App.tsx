import React from 'react';
import PassGen from './components/PassGen'
import {
  Container
} from '@material-ui/core'

const App: React.FC = () => {
  return (
    <Container>
      <PassGen/>
    </Container>
  );
}

export default App;
