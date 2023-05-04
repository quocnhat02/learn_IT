import { FC } from 'react';
import './App.css';
import Person, { EHairColor } from './components/Person';

const App: FC = () => {
  return (
    <div>
      <Person
        name='Nhat'
        age={20}
        email='nhat@gmail.com'
        hairColor={EHairColor.Blonde}
      />
    </div>
  );
};

export default App;
