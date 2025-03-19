import React from 'react'

//passing props down the chain
export const Comp2 = ({changeFunc}) => {

  return (
    <button onClick={changeFunc}>+</button>
  )
}