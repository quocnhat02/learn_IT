import { useState } from 'react';
import Counter from './Counter';

function App() {
  const [check, setCheck] = useState('You need to click more');

  return (
    <div>
      <Counter check={check} setCheck={setCheck} />
    </div>
  );
}

export default App;
