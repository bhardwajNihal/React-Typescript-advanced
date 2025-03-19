import { createContext } from 'react'

export const MessageContext = createContext()
export const MessageContext2 = createContext()

//avoids prop drilling.
// props can easily be passed to any child component