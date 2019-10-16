import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import FrontPage from '../FrontPage/FrontPage';
import './App.css';

function App() {
  return (
    <div>
      <header>
      <NavBar />
      <FrontPage />
      </header>
    </div>
  );
}

export default App;
