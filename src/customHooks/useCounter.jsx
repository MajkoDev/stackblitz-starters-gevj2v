import { useState } from 'react';

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }
  function reset() {
    setCount(initialValue);
  }

  return [count, increment, decrement, reset];
};

export default useCounter;
