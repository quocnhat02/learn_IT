import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await res.json();

      setTodos(data);
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h2 onClick={() => setCount((count) => count + 1)}>{count}</h2>
      {todos.map((todo) => (
        <h3 key={todo.id}>{todo.name}</h3>
      ))}
    </div>
  );
}

export default App;
