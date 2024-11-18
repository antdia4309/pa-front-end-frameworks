import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [displayMessage, setDisplayMessage] = useState('Hello World');
  
  const updateMessage = () => {
    setDisplayMessage(message || 'Hello World');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px'}}>
      <h2>{displayMessage}</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message to Display"
      />
      <button onClick={updateMessage}>Display Message</button>
    </div>
  );
}

export default App;
