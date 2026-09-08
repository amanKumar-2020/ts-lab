/**
 * Question 3 — Generic Pair

Now let's introduce two values of the same generic type.

Create a function called:

createPair<T>()

It should accept two values of the same type and return them as an array.

Expected
createPair(10, 20);
// [10, 20]

createPair("Hello", "World");
// ["Hello", "World"]

createPair(true, false);
// [true, false]

Your function should conceptually have this relationship:

T + T → T[]
Important ❗

This should not be allowed:

createPair(10, "Aman");

Because you're practicing a pair where both values should have the same type.

Your task

Write the function and test it with at least 3 different types.
 */

function createPair<T>(arg1:T,arg2:T):T[] {
    return [arg1,arg2]
}

const result =createPair(12,33)

const result2 = createPair("Aman","Kumar")

console.log(result);
console.log(result2);

export default result;