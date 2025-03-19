import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


export const LocalStorageComp = () => {

    const [name,setName] = useState(()=>{
        const localName = localStorage.getItem("name");
        return localName
    })

    function changeName(e){
        setName(e.target.value)
    }

    useEffect(()=>{
        localStorage.setItem("name",name);
    },[name])

  return (
    <>
    
    <div>localStorage</div>

    <h2>name : {name}</h2>

    <input type="text" placeholder='type name' onChange={changeName}/>

    </>
  )
}
