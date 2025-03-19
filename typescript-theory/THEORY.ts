// ============================
// 🔥 TypeScript Notes 🔥
// ============================

// ===================================
// 1️⃣ What is TypeScript?
// TypeScript is a superset of JavaScript that adds static typing, catching errors at compile time.
// ===================================

// Example of a simple TypeScript program
let message: string = "Hello, TypeScript!";
console.log(message);

// ===================================
// 2️⃣ Basic Types
// TypeScript allows explicit typing of variables to avoid runtime errors.
// ===================================

let name_: string = "John"; // string type
let age: number = 25; // number type
let isStudent: boolean = true; // boolean type
let unknownType: any = "I can be anything"; // any type
let undefinedValue: undefined = undefined; // undefined type
let nullValue: null = null; // null type

// Arrays
let numbers_: number[] = [1, 2, 3, 4];
let names: string[] = ["Alice", "Bob", "Charlie"];

// Tuples (array with fixed number and type of elements)
let person_: [string, number] = ["Alice", 25];

// Union types (variable can be more than one type)
let id: number | string = 101; 
id = "ABC123";

// Type Aliases
type ID = number | string;
let userId: ID = 12345;

// ===================================
// 3️⃣ Functions
// You can specify the types of parameters and the return type of a function.
// ===================================

function greetName(name: string): string {
  return `Hello, ${name}`;
}

function addNumbers(a: number, b: number): number {
  return a + b;
}

function logMessage(message: string): void {
  console.log(message);       //just logs the message, returns nothing
}

// Optional and Default Parameters
function greetUser(name: string = "Guest"): string {
  return `Hello, ${name}`;
}

// ===================================
// 4️⃣ Object Types
// TypeScript allows you to define the shape of objects explicitly.
// ===================================

const user: { name: string; age: number; email: string } = { 
  name: "John", 
  age: 25 ,
  email : "john123@gmail.com"
};

// Optional properties using "?" 
const userWithOptionalEmail: { name: string; age: number; email?: string } = {
  name: "Jane",
  age: 28,
};

// ===================================
// 5️⃣ Interfaces
// Interfaces define object shapes and can be reused.
// ===================================

interface User {
  name: string;
  age: number;
  email?: string;
}

const someUser: User = { name: "Alice", age: 25 };

// Extending Interfaces
interface Person {
  name: string;
}
interface Employee extends Person {
  salary: number;
}
const someEmployee: Employee = { name: "Bob", salary: 50000 };

// ===================================
// 6️⃣ Classes
// Classes define blueprints for objects with properties and methods.
// ===================================

class PersonClass {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}
const personObj = new PersonClass("Alice");
personObj.greet();

// Access Modifiers (public, private, protected)
class Animal {
  public name: string;
  private age: number;
  protected type: string;

  constructor(name: string, age: number, type: string) {
    this.name = name;
    this.age = age;
    this.type = type;
  }
}

// Static Properties
class MathUtil {
  static PI: number = 3.14;
  static calculateArea(radius: number): number {
    return MathUtil.PI * radius * radius;
  }
}
const area = MathUtil.calculateArea(10);

// ===================================
// 7️⃣ Generics
    // Generics make reusable, type-safe functions and classes.
    // Without Generics → We write separate functions for each type
    // With Generics → We write one function that works for any type
// ===================================

function identity<T>(value: T): T {
  return value;
}
//called the same function but with dynamic types of both parameters and return 
const stringIdentity = identity<string>("Hello");      // parameter and return type is string
const numberIdentity = identity<number>(42);           // parameter and return type is number

// Generics in Arrays
function getArray<T>(items: T[]): T[] {     // a function that takes array of type T as parameter and returns the same
  return new Array().concat(items);
}
const numberArray = getArray<number>([1, 2, 3]);

// ===================================
// 8️⃣ Utility Types
// TypeScript provides utility types to make coding easier.
// ===================================

// Partial: Makes all properties optional
interface UserType {
  name: string;
  age: number;
}
const partialUser: Partial<UserType> = { name: "John" }; 

// Pick: Extracts specific properties from an interface
type NameOnly = Pick<UserType, "name">; 

// Omit: Removes specific properties from an interface
type UserWithoutAge = Omit<UserType, "age">; 

// Record: Creates an object type with specific keys and values
const users_: Record<string, number> = { "Alice": 25, "Bob": 30 };

// ===================================
// 9️⃣ Type Guards
// Type guards ensure proper type checking in runtime.
// ===================================

function isString(value: unknown): value is string {
  return typeof value === "string";
}
const val: unknown = "hello";
if (isString(val)) {
  console.log(val.toUpperCase());
}

// ===================================
// 🔟 Advanced Concepts
// Conditional Types, Mapped Types, Enums, etc.
// ===================================

// Enums (like constants)
enum Role {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}
const myRole: Role = Role.ADMIN;

// Conditional Types
type IsString<T> = T extends string ? true : false;
type CheckString = IsString<string>; // true
type CheckNumber = IsString<number>; // false

// Mapped Types
type ReadOnlyUser = Readonly<UserType>; // Makes all properties read-only

// ===================================
// 🔥 BONUS: Type Assertions
// Type assertions are like casting in other languages.
// ===================================

let unknownValue: unknown = "Hello, TypeScript";
let stringLength: number = (unknownValue as string).length;

// ===================================
// 🔥 BONUS: Custom Types with Unions
// TypeScript allows us to create complex types using union and intersection types.
// ===================================

type Shape = "circle" | "square" | "rectangle";
let myShape: Shape = "circle"; 

type AnimalType = { species: string };
type BirdType = AnimalType & { canFly: boolean }; 
const bird: BirdType = { species: "sparrow", canFly: true };

// ===================================
// 🔥 BONUS: TypeScript Config
// `tsconfig.json` is used to configure the TypeScript compiler.
// Run `tsc --init` to create the file.
// ===================================

/*
tsconfig.json example:
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
*/

// ===================================
// 🛠️ How to Run TypeScript Code
// 1. Write TypeScript code in a file with .ts extension.
// 2. Compile it using `tsc filename.ts`.
// 3. Run the output JavaScript using `node filename.js`.
// ===================================

// ===================================
// 🔥 Summary
// 1. TypeScript adds static typing to JavaScript.
// 2. Use `tsc` to compile TypeScript files to JavaScript files.
// 3. Use interfaces, types, classes, generics, and utility types to make code more robust.
// 4. Use "Partial", "Pick", and "Omit" for better control over object types.
// 5. Use "Enums", "Conditional Types", and "Mapped Types" for advanced concepts.
// 6. Configure TypeScript using `tsconfig.json` for your project needs.
// ===================================
