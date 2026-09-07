function murgeObject<T, U>(a: T, b: U) {
  let combine = { ...a, ...b };
  return combine;
}

let result = murgeObject({ name: "Aman" }, { age: 24 });

console.log(result);
