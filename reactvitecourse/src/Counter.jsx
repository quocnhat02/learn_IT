import { useState } from 'react';

const Counter = ({ check }) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div>
      {counter < 5 ? (
        <h1>Counter is too low</h1>
      ) : (
        <h1>Counter is too high</h1>
      )}
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
