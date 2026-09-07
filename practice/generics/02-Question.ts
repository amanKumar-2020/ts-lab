/**
 * Question 2 — Generic Array Function

Create a generic function:

getFirst<T>()

It should:

Accept an array of type T
Return the first element
Work with arrays of different types
Do not use any
Expected behavior
getFirst([10, 20, 30]);          
// 10

getFirst(["Aman", "Rahul", "Raj"]);
// "Aman"

getFirst([true, false]);
// true
 */

function getFirst<T>(array:T[]):T {
    return array[0];
}

let result = getFirst([1,2,3,4,5,6])
let result2 = getFirst(["Aman","Rahul","Ram"])

console.log(result);
console.log(result2);
