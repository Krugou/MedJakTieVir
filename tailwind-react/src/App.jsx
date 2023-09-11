import {useState} from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='text-white bg-black'>Vite + React</h1>
      <div className="border rounded bg-black text-white">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </>
  );
}

export default App;
