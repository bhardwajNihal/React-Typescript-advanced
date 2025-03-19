// Understanding types for various mouse events

import React from "react";

export const MouseEvents : React.FC = () => {

    function handleEnter(e: React.MouseEvent<HTMLDivElement>){  //a mouse event coming from a div
        console.log("Mouse enterred the div!",e.currentTarget);
    }

    
    function handleClick(e: React.MouseEvent<HTMLButtonElement>){  // a mouse click event coming from a button
        console.log("button clicked!", e.currentTarget);
        
    }

    return <div>

        <div onMouseEnter={handleEnter}   style={{ width: "200px", height: "100px", background: "lightgray" }}>Enter</div>
        <button onClick={handleClick}>Click</button>

    </div>
}