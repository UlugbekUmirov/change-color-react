import { useReducer } from "react";
import "./App.css";
import reducer from "./reducer";

function App() {
  const [{ r, g, b }, disporch] = useReducer(reducer, {
    r: 0,
    g: 100,
    b: 150,
  });
  return (
    <div className="App">
      <h1 style={{ color: `rgb(${r} ,${g} ,${b})` }}>Change Color</h1>
      rgb({r} ,{g} ,{b}){" "}
      <div>
        R<button onClick={() => disporch({ type: "INCREMENT_R" })}>+</button>
        <button onClick={() => disporch({ type: "DICREMENT_R" })}>-</button>
      </div>
      <div>
        G<button onClick={() => disporch({ type: "INCREMENT_G" })}>+</button>
        <button onClick={() => disporch({ type: "DICREMENT_G" })}>-</button>
      </div>
      <div>
        B<button onClick={() => disporch({ type: "INCREMENT_B" })}>+</button>
        <button onClick={() => disporch({ type: "DICREMENT_B" })}>-</button>
      </div>
    </div>
  );
}

export default App;
