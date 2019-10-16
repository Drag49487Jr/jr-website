import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import FrontPage from '../FrontPage/FrontPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <FrontPage />
      </header>
    </div>
  );
}

export default App;
