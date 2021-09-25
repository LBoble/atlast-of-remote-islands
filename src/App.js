import React from 'react';
import './App.css';
import Card from './components/Card.js';
import data from './atlas-of-remote-islands.js';

function App() {
  console.log(data);
  
  return (
    <div>
      <div className="container">
        <h1 className="section-title">Atlas of Remote Islands</h1>
      </div>
      
      <div className="container">
        <h2 className="section-title">Arctic Ocean Islands</h2>
        <ul className="cards">
          {data.islands.filter(island => island.region === "Arctic Ocean").map(island => <Card island={island}/>)}
        </ul>
        <h2 className="section-title">Atlantic Ocean Islands</h2>
        <ul className="cards">
          {data.islands.filter(island => island.region === "Atlantic Ocean").map(island => <Card island={island}/>)}
        </ul>
        <h2 className="section-title">Indian Ocean Islands</h2>
        <ul className="cards">
          {data.islands.filter(island => island.region === "Indian Ocean").map(island => <Card island={island}/>)}
        </ul>
        <h2 className="section-title">Pacific Ocean Islands</h2>
        <ul className="cards">
          {data.islands.filter(island => island.region === "Pacific Ocean").map(island => <Card island={island}/>)}
        </ul>
        <h2 className="section-title">Antarctic Ocean Islands</h2>
        <ul className="cards">
          {data.islands.filter(island => island.region === "Antarctic Ocean").map(island => <Card island={island}/>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
