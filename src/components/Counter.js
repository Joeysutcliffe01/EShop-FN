import { useState } from "react";

export function Counter() {
  //useState is the hook
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount(count - 1);
  }
  function incrementCount() {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}
