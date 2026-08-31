// create a generic TypeScript function that takes an array and a callback, applies the callback to every element, and returns a new array.

function customMap<T, U>(arr: T[], cb: (item: T) => U): U[] {
  return arr.map(cb);
}

const result = customMap([1, 2], (item) => item * 2);

console.log(result);
