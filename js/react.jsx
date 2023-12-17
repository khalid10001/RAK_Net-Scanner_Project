import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <a href="#" className="logo">RAK</a>
          <ul className="nav-list">
            <li className="nav-item"><a href="#">Home</a></li>
            <li className="nav-item"><a href="#">About</a></li>
            <li className="nav-item"><a href="#">Solutions</a></li>
            <li className="nav-item"><a href="#">Team</a></li>
            <li className="nav-item"><a href="#">Career</a></li>
          </ul>
          <button className="dropdown-btn">Menu</button>
        </nav>
      </header>
      <div className="content">
        {/* Main content goes here */}
      </div>
    </div>
  );
}

export default App;
