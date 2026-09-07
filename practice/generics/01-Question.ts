/**
 *  Generic Practice — Question 1
identity<T>()

Create a generic function called identity that:

    Accepts one argument

    Returns the same value

    Works with any type

    You must use a generic type parameter

    Do not use any

Expected behavior

identity(10);          // 10
identity("Hello");     // "Hello"
identity(true);        // true
identity({ name: "Aman" }); // { name: "Aman" }
 */


function identity<T>(value:T):T {
    return value
}

let result1 = identity(10)
let result2 = identity("Aman")
console.log(result1);
console.log(result2);

