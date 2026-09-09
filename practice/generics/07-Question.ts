/**
 * Question 7 — Generic Default Type

Now let's learn something new: default generic types.

Create a function called:

createValue<T>()

It should accept an optional value and return it.

The important requirement is:

If the caller doesn't provide a value, the generic type should default to string.

Expected behavior
const result1 = createValue("Aman");
// string

const result2 = createValue(100);
// number

const result3 = createValue();
// string

So this should work:

createValue();

and TypeScript should understand the default type as:

string
 */

function createValue<T=string>(value?: T){
    if(value===undefined){
        return "hai"
    }
    return value
}

const result = createValue(false);
console.log(result);


export {};