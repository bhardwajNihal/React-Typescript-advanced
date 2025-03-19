
// Re-iterating to the Typescript concepts diving deeper

// TOPICS : 

// 1. Basic types and annotations ✅
// 2. Inferring✅- ts by default infers the type of a value based on its initial value, for normal varialbles, functional parameters and also for the return values
// 3. any, never✅
// 4. functional parameters and return annotation, default value✅
// 5. Array with types✅ - normal and <> syntax of initialization. Multidimentional array
// 6. objects type annotations, functions with parameters and return type as object✅
// 7. optional and readonly✅
// 8. types - union (|)- either of fields are mandatory
// 9. intersection (&)- all fields are mandatory✅
// 10. literal types - values can only be among the specified ones✅
// 11. Tuples - array with fixed number of values with spedified types✅
// 12. destucturing array and tuples✅
// 13. enums✅
// 14. types in classes✅ - access modifiers, getters and setters
// 15. interface - for objects and for functions✅ 
        // - inside of object functional attributes are defined as func_name : (x:number,y:number) => void
        // - but for sole function itself the interface is like interface name{ (x:number,y:number):number// }
// 16. types - facilitates union and intersection 
//   - interface - facilitates - extends syntax, implements -for classes                            
// 17. declaration merging✅ - or interface extension, by this we can add attributes to the already defined interface
// 18. Generics - provides a way to dynamically provide types to a function without the need of "any"✅

// 19. The tsconfig.json file - files, include, exclude, rootdir, outdir✅
// 20. COMPILATION : ✅
//      - Node.js doesn’t run TypeScript natively, so you need tsx or ts-node.
//      - CommonJS (require) vs. ES Modules (import/export) causes conflicts.
//      - JavaScript versions (ES5, ES6, ESNext, etc.) exist for compatibility.
//      - Easiest Fix: Use tsx index.ts instead of ts-node.
// 21. Typescript with axios, express✅

// 22. React with Typescript :
        // 1. Component type (React.FC)
        // 2. types for props, and children(ReactNode)
        // 3. generics for useState

        // // IMPORTANT TYPES FOR REACT 
        // ✅ Event handling:
                // React.ChangeEvent<HTMLInputElement> (for input change)
                // React.FormEvent<HTMLFormElement> (for form submit)
                // React.MouseEvent<HTMLButtonElement> (for button click)
        // ✅ State types:
                // useState<number>(0), useState<string>(""), useState<boolean>(false)
                // useState<TodoType[]>([]) for arrays
        // ✅ Function return types:
                // (): void (if nothing is returned)
                // (): number (if a number is returned)
        // ✅ Component props:
                // Define an interface for props
        // ✅ Refs:
                // useRef<HTMLInputElement>(null), useRef<HTMLDivElement>(null)




                



// console.log("hello");


// interface sth{
//     name : string;
//     add : (x:number,y:number) => number
// }

// const var1:sth = {
//     name: "nihal",
//     add : (a,b) => a+b
// }

// console.log(var1.name);
// console.log(var1.add(2,3));

// interface func_type{
//     (x:number,y:number):number
//     }

//     const add : func_type = (a,b) => a+b
    
//     console.log(add(2,10));



// a bit complex generic fucntion : 

        // interface objType<T>{
        //         [key:string] : T
        // }
// takes an obj of type objType as paramrter, returns an obj 
        // function randomKeyValuePair<T>(obj:objType<T>) : {key:string, value: T} {
        //         const keys = Object.keys(obj);                          // a built in js method - creates an array out of keys
        //         const randomKey = keys[Math.floor(Math.random()*keys.length)];

        //         return {key : randomKey, value : obj[randomKey]}
        // }

        // const stringObj = { a : "apple", b : "banana", c : "coffee"};
        // const res = randomKeyValuePair<string>(stringObj);

         // console.log(res);


// generic function to filter based on a condition

// interface filterArrType<T>{
//         arr : T[];
//         condition : (item : T) => boolean
// }

// function filterArr<T>({arr,condition}:filterArrType<T>) : T[]{          // takes, array, and a function(returns boolean) as argument, returns and arr of T[]

//         return arr.filter(item => condition(item))              // iterates through each array item, returns if condition returns true
// }

// const numArr = [1,2,3,4,5];
// const res1 = filterArr<number>({arr : numArr, condition: (num) => num%2==0})      // take each array item as num

// console.log(res1);


// const stringArr = ["apple", 'mango', "banana", "guava"]

// const res2 = filterArr<string>({arr:stringArr, condition : (string) => string.length < 6})

// console.log(res2);

