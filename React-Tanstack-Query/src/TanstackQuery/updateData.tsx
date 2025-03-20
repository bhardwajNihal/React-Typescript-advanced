// Logic to update data, using the useMutation
// Invalidating the query, refreshes the data and ui updates imediately, without manual refresh

import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export const AddTodo = () => {

    async function addPost(){       // function to add post 
        const newpost = {
            title : 'something',
            isDone : false
        }
        await axios.post("https://jsonplaceholder.typicode.com/posts",newpost)
    }

    const queryClient = useQueryClient();       // queryClient to invalidate update,and refresh data
    const todoMutation = useMutation({          // useMutation, takes function and onSuccess handler
        mutationFn : addPost,
        onSuccess : () => {
            queryClient.invalidateQueries({queryKey : ["todos"]})       // takes the unique key as queryKey, so as it to know what data to update
        }
    })

    return <div>
        <button onClick={() => todoMutation.mutate()}>Add todo</button>
    </div>
}