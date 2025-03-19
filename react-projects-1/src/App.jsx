import { useEffect, useState } from "react"
import { Comp1 } from "./components/comp-1";
import { Comp2 } from "./components/comp-2";
import { UsestateFunc } from "./components/usestateFunc";
import { LocalStorageComp } from "./components/localStorage";
import { CopyToClipboard } from "./components/CopyToClipboard";
import { CompA } from "./components/contextAPI/compA";
import ComplexCounter from "./components/useReducer";
import { Timer } from "./components/timer";

import { EcommerceMain } from "./Projects/E-commerce-shoes/EcommerceMain";

function App() {



    // const [count,setCount] = useState(0);

    // function changeCount(){
    //   setCount(count => count + 1)
    // }
  return (
    <>
    {/* <h2>{count}</h2>     */}

{/* <Comp1 changeFunc={changeCount}/>
<Comp2 changeFunc={changeCount}/> */}

{/* <UsestateFunc/> */}

{/* <LocalStorageComp/> */}

{/* <CopyToClipboard/> */}

{/* <CompA/> */}

{/* <ComplexCounter/> */}

{/* <Timer/> */}



<EcommerceMain/>



    </>
  )
}

export default App
