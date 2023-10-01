import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(10);

  const add = () => {
    if (count < 20) {
      setCount(count + 1);
    }
    else {
      alert("You can't make Count more than 20");
    }
  }
  const remove = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    else {
      alert("You can't make Count less than 0");
    }
  }
  const reset = () => {
    setCount(10);
  }


  return (
    <>
      <h1>Hello This is Jitendra Dhakar</h1>
      <br />
      <h2>Count : {count}</h2>
      <br />
      <br />
      <button onClick={add}>Add : {count}</button>
      <br />
      <br />
      <button onClick={reset}>Reset : {count}</button>
      <br />
      <br />
      <button onClick={remove}>Remove : {count}</button>
    </>
  )
}

export default App
