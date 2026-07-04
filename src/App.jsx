import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <div>
      <h1>Justen Hilliard</h1>
      <p>Just practicing react and stuff booooom</p>

      <button onClick={handleClick}>
        {clicked ? "you clicked it lol" : "click me"}
      </button>
    </div>
  )
}

export default App