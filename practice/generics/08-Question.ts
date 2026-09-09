/**
 * Question 8 — merge<T, U>

Create:

merge<T, U>()

It should accept two objects and combine them.

Example:

const user = {
  name: "Aman",
  age: 22
};

const details = {
  city: "Delhi",
  isStudent: true
};

const result = merge(user, details);

Expected:

{
  name: "Aman",
  age: 22,
  city: "Delhi",
  isStudent: true
}
Requirements

Use two generic types:

<T, U>

And TypeScript should understand that the returned object contains properties from both objects.
 */

function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const user = {
  name: "Aman",
  age: 22,
};

const details = {
  city: "Delhi",
  isStudent: true,
};

const result = merge(user, details);

console.log(result);
