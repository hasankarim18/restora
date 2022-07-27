import React from 'react';

import Main from './Components/Main';
import { ContextProvider } from './Store/ContextProvider'


function App() {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>

  );
}

export default App;
