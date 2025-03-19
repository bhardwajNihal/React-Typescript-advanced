// Typescript for Context API 

import React, { createContext, ReactNode, useState } from "react";

// types for props
interface propType{
    children : ReactNode
}

//types of context 
interface contextType{
    count : number,
    increment : () => void;
    decrement : () => void;
}

// creating context 
export const counterContext = createContext<contextType>({
    count : 0,
    increment : () => {},
    decrement : () => {}
})

export const CounterContextProvider: React.FC<propType> = ({children}) => {

    const [count,setCount] = useState(0);

    function increment(){
        setCount(c=>c+1)
    }
    function decrement(){
        setCount(c=>c-1)
    }

    // wrapping the app as children, make the context accessible to all the components
    return <counterContext.Provider value={{count, increment,decrement}}>
        {children}
        </counterContext.Provider>
    
}