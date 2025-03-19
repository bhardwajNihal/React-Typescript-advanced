import React from 'react'
import { useState } from 'react';
// useState can also be initialised via function

export const UsestateFunc = () => {

    const [count, setCount] = useState(() => {
        const initialVal = 5;
        return initialVal;
    })
    return (
        <>
            <div>usestateFunc</div>

            <h2>Count : {count}</h2>

            <button onClick={() => setCount(count => count + 1)}>increment</button>

        </>
    )
}
