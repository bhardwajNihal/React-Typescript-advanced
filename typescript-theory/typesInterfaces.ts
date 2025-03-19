
// function with object as an argument

// instead of defining the type of an object each time is used in a new function,
// ts provides a way to define a separete type of object explicitely for its reusability - using types and interfaces

    interface address{              
        country?: string,
        city: string,
        pin?: number,
    }

    interface userType{             
        firstname: string,
        lastname?: string,          // "?" to make the field optional
        age:Number,
        Address: address,
        greet: ()=> string,
    }

    interface office{
        Manager: string,
        noOfEmployees: number,
        address:address,
    }

    const user1 = {
        firstname : "nihal",
        age: 20,
        Address:{
            city : "Mumbai",
            pin : 123432
        },
        greet: ()=>{
            return "hi, my name is nihal"
        }
    }

    function greeting(user:userType){
        console.log("hello ",user.firstname, user.age, user.Address.city);
        console.log(user.greet());
    }

    greeting(user1);

    class employee implements userType{         // defining a class from an interface : facilitates this keyword, and passing the attributes inside the methods
        firstname: string;
        lastname: string;
        age: Number;
        Address:address;
        greet: () => string;
        constructor(firstname:string, lastname:string, age:number, Address:address){
            this.firstname = firstname;
            this.lastname =lastname;
            this.age = age;
            this.Address = {
                city : "mumbai",
                pin : 121212
            }
            this.greet = () => {
                return "hello my name is " + this.firstname + ", I am from " + this.Address.city;
            }
        }
    }

    const employee1 = new employee("nihal", "bhardwaj", 21, {city : "mumbai"});

    console.log("this is a function call "+employee1.greet());



// the only difference between types and interface is: 
    // Interface lets us define class that implements it, and facilitates properties of a class
    // types lets us do union and intersection of two or more objects





