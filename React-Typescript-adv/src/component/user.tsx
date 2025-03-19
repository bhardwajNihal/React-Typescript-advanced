import { useRef, useState } from "react";

interface userInfoType{
    name:string|undefined;
    age : number;
}


export const UserComponent:React.FC = () => {

    const [userInfo, setUserInfo] = useState<userInfoType>({
        name : '',
        age  : 0
    })

    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null)

    function handleUpdate(e:React.FormEvent){
        
        e.preventDefault()          // prevent page reload on form submit(if not, removes the state update)

        setUserInfo({
            name: nameRef.current?.value,
            age : Number(ageRef.current?.value)
        })
    }

    return <div>
       
       {
        userInfo && <div>
             UserInfo: 
        <h2>Name : {userInfo?.name}</h2>
        <h2>Age : {userInfo?.age}</h2>
        </div>
       }


        <form onSubmit={handleUpdate}>

            <input ref={nameRef} type="text" placeholder="Name" />
            <input ref={ageRef} type="number" placeholder="Age" />
            <button type="submit">Update credentials</button>
        </form>

    </div>
}