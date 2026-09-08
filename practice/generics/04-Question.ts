/**
 * Question 4 — Two Generic Types

Now we're going to make an important jump.

Previously you had:

<T>

which meant both values had to use the same type.

Now create:

<T, U>

Create a function called:

createPair<T, U>()

It should accept two different types and return them as a tuple/array.

Expected
createPair(10, "Aman");
// [10, "Aman"]

createPair("Age", 22);
// ["Age", 22]

createPair(true, "isStudent");
// [true, "isStudent"]

So now:

T → first value
U → second value

For example:

createPair(10, "Aman");

should infer:

T = number
U = string
 */

function createPair<T,U>(first:T,second:U):[T,U] {
    return [first,second];
}

const result = createPair(10,"aman")
const result2 = createPair("hai",true)

console.log(result);
console.log(result2);

export {};