import { useState } from "react";

export const NumberCount = () => {

  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(() => count + 1);    //callback function
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleButtonClick}>Increment</button>
    </>
  )
}