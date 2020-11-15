import React, { useState } from 'react';
import './App.css';
import Child from './components/Child'



const App: React.FC =() => {

  const [message, setMessage ] = useState<string>('');
  const handleMessage = (e:React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }

  return (
    <div className="App">
      <p>{message}</p>
      <input type="text" value={message} onChange={handleMessage}/>
    </div>
  );
}

export default App;
