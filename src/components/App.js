import '../App.css';
import React from 'react';
import MainBeerList from './MainBeerList';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainBeerList />
    </div>
  );
}

export default App;
