import React from 'react';
import Header from './Components/Header.js';
import SearchBar from './Components/SearchBar.js';
import './App.css';

function App() {
  return (
    <div  className="container-fluid">
      <Header />
     <SearchBar />
    </div>
  );
}

export default App;
