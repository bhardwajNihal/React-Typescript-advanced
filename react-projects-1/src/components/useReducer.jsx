import React, { useReducer } from "react";
import { useState } from "react";

const initialState = { count: 0 }; // Initial state

export default function ComplexCounter() {

    const [input, setInput] = useState(0)

    function reducer(state, action) {
        switch (action.type) {
          case "increment":
            return { count: state.count + ((input==0) ? 1 : Number(input))};
          case "decrement":
            return { count: state.count - ((input==0) ? 1 : Number(input))};
          case "reset":
            return { count: 0 };
          default:
            throw new Error("Unknown action type");
        }
      }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <input type="text" onChange={(e)=>setInput(e.target.value)} />
      <button onClick={() => dispatch({ type: "increment" })}>➕</button>
      <button onClick={() => dispatch({ type: "decrement" })}>➖</button>
      <button onClick={() => dispatch({ type: "reset" })}>🔄</button>
    </div>
  );
}
