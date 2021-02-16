import React from 'react';

import MemoryGame from './pages/game';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <MemoryGame />
    <GlobalStyle />
  </>
);

export default App;
