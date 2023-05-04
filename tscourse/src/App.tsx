import { FC } from 'react';
import './App.css';
import Person from './components/Person';

const App: FC = () => {
  return (
    <div>
      <Person name='Nhat' age={20} email='nhat@gmail.com' />
    </div>
  );
};

export default App;
