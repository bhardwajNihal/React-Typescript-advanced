import React, { useState } from "react";

interface todoType{
    id : number;
    title : string | undefined;
    isDone : boolean
}


export const Todo: React.FC = ()=>{

    const [todos,setTodos] = useState<todoType[]>([])
    const [todoTitle,setTodoTitle] = useState<string>("")

    function addTitle(e: React.ChangeEvent<HTMLInputElement>){
        setTodoTitle(e.target.value)
    }

    function addTodo(){
        const newTodo: todoType = {
            id : todos.length,
            title : todoTitle,
            isDone : false
        }

        setTodos([...todos,newTodo])
    }

    function markAsDone(id:number){
        setTodos(prevTodos => prevTodos.map(todo => (todo.id==id) ? {...todo,isDone:true} : todo))
    }


    return <div>
        <input type="text" placeholder="Type Todo" onChange={addTitle}/>
        <button onClick={addTodo}>Add</button>

        <div className="todos">
            {todos.map(todo => <li key={todo.id} onClick={()=>markAsDone(todo.id)}>{todo.title} : {todo.isDone ? "Done" : "Not Done"}</li>)}
        </div>
    </div>
}