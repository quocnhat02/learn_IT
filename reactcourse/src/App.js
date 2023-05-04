/* eslint-disable default-case */
import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1,
        showText: state.showText,
      };

    case 'TOGGLESHOWTEXT':
      return {
        counter: state.counter,
        showText: !state.showText,
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { counter: 0, showText: true });

  return (
    <div>
      {state.counter} <br />
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' });
          dispatch({ type: 'TOGGLESHOWTEXT' });
        }}
      >
        Increment
      </button>
      {state.showText && <p>This is a text</p>}
    </div>
  );
}

export default App;
