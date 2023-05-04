/* eslint-disable default-case */
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        setData(res.data[0].email);
        console.log('API WAS CALLED');
      });
  }, []);

  return (
    <div>
      {data} <br />
      {count}
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default App;
