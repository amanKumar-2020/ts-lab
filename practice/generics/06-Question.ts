/**
 * Question 6 — Generic Constraints

Now let's learn another extremely important concept:

<T extends ...>

Create a function:

getLength<T>()

It should accept anything that has a length property and return its length.

These should work:

getLength("Aman");
// 4

getLength([10, 20, 30]);
// 3

getLength(["A", "B"]);
// 2

But this should not work:

getLength(100);
// ❌ Error

because number doesn't have a length property.
 */

function getLength<
  T extends {
    length: number;
  },
>(arg: T):number {
  return arg.length;
}

const result = getLength("hello");

console.log(result);

export {};
