import React from 'react'
import { MessageContext } from './message'
import { MessageContext2 } from './message'

import { useContext } from 'react'

export const CompC = () => {

    const message1 = useContext(MessageContext);
    const message2 = useContext(MessageContext2)

    return (
        // <MessageContext.Consumer>
        //     {message1 =>
        //             <MessageContext2.Consumer>
        //                 {
        //                     message2 => <h2>message1:{message1} <br /> message2:{message2}</h2>
        //                 }
        //             </MessageContext2.Consumer>
        //     }
        // </MessageContext.Consumer>

    // simply using useContext to avoid this complex callbacks to consume data
    <h2>message1:{message1} <br /> message2:{message2}</h2>
    )
}
