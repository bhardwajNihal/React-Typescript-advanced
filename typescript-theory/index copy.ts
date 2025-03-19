
let x: number = 5;

// x = "hello"          // will give compilation error

console.log(x);

function greet(name:string):string{
    return "hello " + name
}      

// function sum(x:number, y:number):number{        //specifying the return type
//     return x + y
// }

function isEligibleToVote(age:number):boolean{
    return (age>=18) ? true  : false
}

function callback(){
    console.log("callback function ran!");
    
}

function delay(cb: ()=>void){             // syntax to pass functional arguments
setTimeout(cb, 3000);
}

delay(callback)


// will compile down to that js syntax which is compatible to the standard set in the tsconfig file
const arrowfn = ()=> console.log("hello!");

arrowfn()
