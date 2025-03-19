import React from 'react'
import { useState } from 'react'
import { CopyModalPopup } from './Portal';

export const CopyToClipboard = () => {

    const [copiedText, setCopiedText] = useState("");
    const [isCopied, setIscopied] = useState(false);

    async function copyToClipboard(){
        try {
            await navigator.clipboard.writeText(copiedText);

            setIscopied(true);
            setTimeout(() => {
                setIscopied(false)
            }, 3000);
        } catch (error) {
            alert("Failed copying to clipboard",error);
            
        }
    }

    return (
        <div>
            <div>CopyModal</div>

            <input type="text" onChange={(e)=>setCopiedText(e.target.value)}/>
            <button onClick={(copyToClipboard)}>copy</button>

            {isCopied && <CopyModalPopup/>}
        </div>
    )
}
