// Step 4 : The fetch data logic using the Tanstack query

import React from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const Todos:React.FC = () => {

async function addTodo(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
}

// defining the useQuery hook for data fetching, whatever returned in addTodo function is stored in data
// Query is uniquely identified by the "todos" key
// loading and error is inbuilt. makes life easier
    const {data:todos,isLoading,isError} = useQuery({
        queryKey : ["todos"],
        queryFn : addTodo
    })

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading posts</p>;

    return <div>
        {todos.map(t => <div style={{border:"solid 2px black", padding:"10px"}} key={t.id}>{t.title}</div>)}
    </div>
}