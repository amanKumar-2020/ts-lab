interface Store<T> {
  list: T[];
  transformString<U>(index: number, cb: (item: T) => U): U;
}

const store: Store<string> = {
  list: ["Aman", "Ram", "Rohan"],
  transformString(index: number, cb) {
    return cb(this.list[index]);
  },
};

let result = store.transformString(2, (item) => item.toLocaleUpperCase);

console.log(result);
