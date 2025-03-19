interface buttonProps{
    label : string;
    handleClick : ()=>void;
    isdisabled : boolean
}

export const Button : React.FC<buttonProps> = (props) => {

    return <button
    style={{border:"solid 2px red",padding:"5px"}}
     onClick={props.handleClick} 
     disabled={props.isdisabled}
     >{props.label}</button>
}