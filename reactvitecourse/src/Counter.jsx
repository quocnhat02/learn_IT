import { useState } from 'react';

const Counter = ({ check, setCheck }) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
    // if (counter >= 5) setCheck('You clicked enough');
  };

  return (
    <div>
      {counter > 5 && <h2>Yeahhhhhhh</h2>}
      {counter}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
