import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const appendLiEl = () => {
    setList((prev) => [...prev, prev.length + 1]);
  };
  const [list, setList] = useState([1, 2]);

  return (
    <>
      <button onClick={appendLiEl}>추가하기</button>
      <ul>
        {/* key 쓰지 않음 */}
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
