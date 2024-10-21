import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);

  // Function to add value to the counter
  const addvalue = () => {
    let newCounter = counter + 1;
    console.log("Clicked", newCounter);
    setCounter(newCounter);
  };

  // Function to remove value from the counter
  const removevalue = () => {
    let newCounter = counter - 1;
    console.log("Clicked", newCounter);
    setCounter(newCounter);
  };

  return (
    <>
      <h1>Hello World vite</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removevalue}>Remove value</button>
    </>
  );
}

export default App;
