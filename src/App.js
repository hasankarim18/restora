import React from 'react';
import './App.css';
import Main from './Components/Main';
import { ContextProvider } from './Context/Context'

function App() {
  return (

    <ContextProvider>
      <Main />
    </ContextProvider>

  );
}

export default App;
