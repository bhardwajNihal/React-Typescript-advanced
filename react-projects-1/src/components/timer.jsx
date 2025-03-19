import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';

export const Timer = () => {

    const [timer,setTimer] = useState(0);
    const timerRef = useRef()

    useEffect(()=>{
        
        timerRef.current = setInterval(() => {
            setTimer(c => c+1)
        }, 1000);

        return (()=>{
            clearInterval(timerRef.current)
        })
    },[timer])
    

  return (
<div>
<div>Timer : {timer} secs </div>

<button onClick={()=> clearInterval(timerRef.current)}>stop</button>
<button onClick={()=>setTimer(0)}>reset</button>
</div>
  )
}
