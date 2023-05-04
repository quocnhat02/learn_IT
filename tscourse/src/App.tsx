import { FC, createContext } from 'react';
import './App.css';
import Person, { EHairColor } from './components/Person';

interface IAppContext {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<IAppContext | null>(null);

const App: FC = () => {
  const contextValue: IAppContext = {
    name: 'Nhat',
    age: 20,
    country: 'Nhat',
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div>
        <Person
          name='Nhat'
          age={20}
          email='nhat@gmail.com'
          hairColor={EHairColor.Blonde}
        />
      </div>
    </AppContext.Provider>
  );
};

export default App;
