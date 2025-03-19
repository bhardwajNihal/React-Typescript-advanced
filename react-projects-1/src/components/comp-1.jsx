import React from 'react'

//passing props down the chain
export const Comp1 = ({changeFunc}) => {

  return (
    <button onClick={changeFunc}>+</button>
  )
}
