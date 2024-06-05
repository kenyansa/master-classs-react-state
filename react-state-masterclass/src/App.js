import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("");

  function handleColorChange() {
    setColor("red");
  }

  return (
    <div className="App">
      <h1 onClick={handleColorChange} style={{ color: color }}>
        React State
      </h1>
    </div>
  );
}

export default App;
