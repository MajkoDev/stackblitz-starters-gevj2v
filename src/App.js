import React from 'react';
import './style.css';

import useToggle from './customHooks/useToggle';
import useCounter from './customHooks/useCounter';

export default function App() {
  const [isVisible, toggle] = useToggle();
  const [count, increment, decrement, reset] = useCounter();

  return (
    <div>
      <button onClick={toggle}>{isVisible ? 'Hide' : 'Show'}</button>
      {isVisible && <h2>Hidden Text</h2>}
      <br /> <br />
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>R</button>
    </div>
  );
}
