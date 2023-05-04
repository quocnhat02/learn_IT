import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div>
      {counter} <br />
      <button onClick={increment}>Increment</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}

export default App;
