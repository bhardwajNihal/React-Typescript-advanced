
// React Portal allows rendering a component outside its parent DOM hierarchy while keeping it within the React tree.
//  It is used to prevent styling issues like z-index, overflow: hidden, and incorrect positioning in modals, tooltips, and dropdowns. 
// Portals ensure that components appear correctly by mounting them to a separate DOM node, typically outside the main application root.


import ReactDOM from 'react-dom';

export function CopyModalPopup(){

    return ReactDOM.createPortal(
            <span style={{border:"solid 2px red",padding:"10px",display:"absolute",bottom:"10px"}}>
            Copied to Clipboard successfully!!!
        </span>,
        document.getElementById("copy-modal-div")       // add this element to index.html file
    )
}

  