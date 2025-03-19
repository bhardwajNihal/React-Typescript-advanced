
import React from 'react'
import { CompB } from './compB'
import { MessageContext } from './message';
import { MessageContext2 } from './message';

export const CompA = () => {    

    const message = "hello from A";
    const message2 = "hello again!!!"

  return <div>

        <MessageContext.Provider  value={message}>
        <MessageContext2.Provider value={message2}>
        <CompB/>    
        </MessageContext2.Provider >

        </MessageContext.Provider >
  </div>

}
