/* eslint-disable default-case */
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        setData(res.data[0].email);
        console.log('API WAS CALLED');
      });
  }, []);

  return <div>{data}</div>;
}

export default App;
