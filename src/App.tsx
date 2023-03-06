import { useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState();

  const getFizzBuzz = async () => {
    try {
      const resp = await axios.post("http://localhost:3000/fizzbuzz", {
        count: (count + 1)
      });
      setText(resp.data.message);
    } catch (err) {
      console.log(err)
    }
    setCount(count + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Your count
        </p>
        <p>
          {count}
        </p>
        <button onClick={getFizzBuzz}>
          Push me!
        </button>
        <p className="fizzbuzz">
          {text}
        </p>
      </header>
    </div>
  );
}

export default App;
