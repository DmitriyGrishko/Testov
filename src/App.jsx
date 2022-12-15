import React from 'react';
import List from './components/List/List';
import NavBar from './components/NavBar/NavBar';
import './style.css';

function App() {
  return (
    <div className="App" style={{ position: 'relative', zIndex: '10' }}>
      <NavBar />
      <List />
    </div>
  );
}

export default App;
