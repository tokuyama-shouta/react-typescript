import React from 'react';
import './App.css';
import Child from './components/Child'



const App: React.FC =() => {

  return (
    <div className="App">
      <Child message="子コンポーネント"><h1>チルドレンで表示</h1></Child>
    </div>
  );
}

export default App;
