/**
 * Question 5 — Generic Object

Now let's move from arrays/tuples to objects.

Create a generic function called:

getProperty<T, K>()

It should accept:

An object
A property name/key

And return the value of that property.

Example
const user = {
  name: "Aman",
  age: 22
};

getProperty(user, "name");
// "Aman"

getProperty(user, "age");
// 22

Another object:

const product = {
  title: "Laptop",
  price: 50000
};

getProperty(product, "title");
// "Laptop"

getProperty(product, "price");
// 50000
🔥 The important challenge

This should be rejected by TypeScript:

getProperty(user, "address");
// ❌ Error

because "address" doesn't exist on the user object.
 */


function getProperty<T,K extends keyof T>(obj: T ,key:K):T[K] {
    return obj[key]
}

const user = {
  name: "Aman",
  age: 22,
};

const result = getProperty(user,"name")
console.log(result);

export{};