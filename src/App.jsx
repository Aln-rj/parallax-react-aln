// src/App.js
import React from 'react';
import { Parallax } from 'react-parallax';
import './App.css';
import parallax1 from './assets/images/parallax1.jpg';
import parallax2 from './assets/images/parallax2.jpg';
import parallax3 from './assets/images/parallax3.jpg';

function App() {
  return (
    <div className="App">
      
      <Parallax strength={600} bgImage={parallax1}>
        <div className="content">
          <div className="text-content">Illuminate!!</div>
        </div>
      </Parallax>

      
      <Parallax strength={500} bgImage={parallax2}>
        <div className="content">
          <div className="text-content">Cheers!</div>
        </div>
      </Parallax>

      {/* Third Parallax Section */}
      <Parallax strength={400} bgImage={parallax3}>
        <div className="content">
          <div className="text-content">Evergreen!!</div>
        </div>
      </Parallax>
    </div>
  );
}

export default App;
