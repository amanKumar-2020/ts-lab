// create a generic TypeScript function that takes an array and a callback, applies the callback to every element, and returns a new array.

// function customMap<T, U>(arr: T[], cb: (item: T) => U): U[] {
//   return arr.map(cb);
// }

// let result = customMap([1, 2], (item) => item * 2);

// console.log(result);

function customFilter<T>(
  arr: T[],
  // cb: (el: T, index: number, arr: T[]) => boolean,
) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < 3) result.push(i);
  }
  return result;
}

const filtered = customFilter([1, 2, 3, 4, 5, 6]);
console.log(filtered);
