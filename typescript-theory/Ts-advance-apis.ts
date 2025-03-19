
interface usertype{
    id: string;
    name: string;
    email: string;
    age: number;
    password: string
}

// PICK
    // suppose we have to make a db call, to update some fields
    // and only name, age and password is allowed to be updated

    // instead of defining another interface of update fields
        // interface updateFields{
        //     name:string;
        //     age: number;
        //     password: string
        // }
        // function updateUserData(updatedFields : updateFields){
        //     //db call
        // }


    // Its better to pick those field from already defined user interface, to maintain the single source of truth
    type updateFields = Pick<usertype, "name" | "age" | "password">
    function updateUserData(updatedFields : updateFields){
            //db call
        }


// PARTIAL : simply makes each attributes of an interface optional

    // like: if user wants to only update the name field
    type updatefieldsOptional = Partial<updateFields>
    function updateUser(updatedFields : updatefieldsOptional){
        // db call
    }

    const updateData:updateFields = {
        name: "nihal",
        age: 20,
        password : "nihal123"
    }

    const updateDataOptional: updatefieldsOptional = {
        name : "nihal bhardwaj"
    }



// READONLY: 
    // typescript doesn't complain even if we are trying to modify an array or an object intialized as const
    // to solve this we use readonly

    // like
    interface simpleUser{
        name : string;
        age : number
    }
    interface readonlyUser{
        readonly name : string;
        readonly age : number
    }

    const user_1: simpleUser = {
        name : "nihal",
        age : 20
    }
    const user_2: readonlyUser = {
        name : "nihal",
        age : 20
    }
    user_1.age = 21;            // allows to do so
    console.log(user_1.age);
    
    // user_2.age = 22;        // doesn't allow modification
    

    const arr_1 : number[] = [1,2,3,4,5];   
    arr_1[2] = 100;             // ideally this shouldn't happen
    console.log(arr_1);
    
    // So we use readonly to restrint typescript to manipulate data meant to be constants
    const arr_2: readonly number[] = [1,2,3]
    // arr_2[2] = 100;                 // will through error

    


// RECORDS : lets us define types for keys and values in a much cleaner way

    // ugly syntax : 
        interface User{
            name : string;
            age : number
        }
        
        interface userDetails{  
        [key:string] : User
        }

        const newUser:userDetails = {
            "123abc" : {
                name : "nihal",
                age : 21
            }
        } 

    // cleaner syntax : 
        const useDetailsRecord : Record<string, {name: string, age: number}>  = {
            "123abc" : {
                name : "nihal",
                age : 21
            }
        }
 


// MAP : another js specific concept to define key value pair

    const userMap = new Map<string, User>();        // inforcing types
    userMap.set("123abc", {name : "harsh", age : 21})

    console.log(userMap.get("123abc"));


        