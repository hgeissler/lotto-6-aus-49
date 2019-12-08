import React from 'react';
import Board from './components/Board';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Lotto: 6 aus 49</h3>
        <Board />
      </header>
    </div>
  );
}

export default App;
