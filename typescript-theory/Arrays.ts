// 1. Simple Array: An array of strings
let fruits: string[] = ["apple", "banana", "cherry"];
console.log("Simple Array:", fruits);

// 2. Multi-dimensional Array: A 2D array of numbers
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Multi-dimensional Array:", matrix);

// 3. Tuple: An array with fixed types and order
let person: [string, number, boolean] = ["Alice", 25, true];
console.log("Tuple Example:", person);

// 4. Union Type Array: An array containing multiple types
let mixed: (string | number)[] = ["Alice", 25, 30, "Bob"];
console.log("Union Type Array:", mixed);

// 5. Readonly Array: An array that cannot be modified
let readonlyArray: ReadonlyArray<number> = [1, 2, 3];
console.log("Readonly Array:", readonlyArray);
// readonlyArray[0] = 10; // this will cause an error

// 6. Common Array Methods
let numbers: number[] = [10, 20, 30, 40];

// Push: Add an element to the end
numbers.push(50);
console.log("After Push:", numbers);

// Pop: Remove the last element
numbers.pop();
console.log("After Pop:", numbers);

// Map: Create a new array by applying a function to each element
let doubled = numbers.map(n => n * 2);
console.log("Doubled Numbers (Map):", doubled);

// Filter: Create a new array with elements that pass a condition
let evens = numbers.filter(n => n % 2 === 0);
console.log("Filtered Numbers (Evens):", evens);

// Reduce: Reduce the array to a single value (sum in this case)
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log("Sum of Numbers (Reduce):", sum);

// ForEach: Perform an operation on each element
numbers.forEach(n => console.log("ForEach Number:", n));

// Find: Find the first element that matches a condition
// let firstAbove20 = numbers.find(n => n > 20);
// console.log("First Number Above 20 (Find):", firstAbove20);

// Splice: Remove elements at a specified index
numbers.splice(1, 2); // Removes 2 elements starting at index 1
console.log("After Splice:", numbers);

// 7. Custom Types in Arrays
    // Define a custom type using an interface  
    interface User {
        name: string;
        age: number;
    }

// Array of objects using the custom type
    let users: User[] = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 }
    ];

// Access and manipulate elements
console.log("Users Array:", users);
users.forEach(user => console.log(`User: ${user.name}, Age: ${user.age}`));

// 8. Working with Multi-dimensional Arrays
// Iterate through the matrix and log each row
console.log("Matrix Rows:");
matrix.forEach(row => console.log(row));

// 9. Combining Everything in a Single Practical Example
interface Product {
    name: string;
    price: number;
}
let products: Product[] = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];

// Filter products cheaper than $800
let affordableProducts = products.filter(product => product.price < 800);
console.log("Affordable Products:", affordableProducts);

// Calculate total price of all products using reduce
let totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log("Total Price of All Products:", totalPrice);

// Display product names using map
let productNames = products.map(product => product.name);
console.log("Product Names:", productNames);

// Access the first product using find
// let firstExpensiveProduct = products.find(product => product.price > 800);
// console.log("First Expensive Product:", firstExpensiveProduct);
