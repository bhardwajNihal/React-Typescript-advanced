import React from "react";
import { useContext } from "react";
import { counterContext } from "./ContextProvider";

export const CounterComp : React.FC = () => {

    // consuming context, destructuring values from the contextprovider
    const {count, increment, decrement} = useContext(counterContext)      

    return <div>
        <h1>{count}</h1>

        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
}