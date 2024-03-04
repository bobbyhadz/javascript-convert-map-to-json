// EXAMPLE 1 - Convert a Map to JSON in JavaScript

const map = new Map([
  ['name', 'bobby hadz'],
  ['country', 'Chile'],
]);

// ✅ Convert to JSON string
const json = JSON.stringify(Object.fromEntries(map));

// 👇️ '{"name":"bobby hadz","country":"Chile"}'
console.log(json);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Defining a reusable function

// function mapToJSON(map) {
//   return JSON.stringify(Object.fromEntries(map));
// }

// const map = new Map([
//   ['name', 'bobby hadz'],
//   ['country', 'Chile'],
// ]);

// const json = mapToJSON(map);

// // 👇️ {"name":"bobby hadz","country":"Chile"}
// console.log(json);

// // 👇️ string
// console.log(typeof json);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert a JSON string to a Map object in JavaScript

// const map = new Map([
//   ['name', 'bobby hadz'],
//   ['country', 'Chile'],
// ]);

// const json = JSON.stringify(Object.fromEntries(map));

// const obj = JSON.parse(json);

// const mapAgain = new Map(Object.entries(obj));

// // 👇️ Map(2) { 'name' => 'bobby hadz', 'country' => 'Chile' }
// console.log(mapAgain);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Defining a reusable function

// function JSONtoMap(json) {
//   const obj = JSON.parse(json);

//   return new Map(Object.entries(obj));
// }

// const json = JSON.stringify({name: 'bobby', age: 30});

// const map = JSONtoMap(json);

// // 👇️ Map(2) { 'name' => 'bobby', 'age' => 30 }
// console.log(map);

// ------------------------------------------------------------------

// // EXAMPLE 5 - Convert a Map to JSON using `Map.forEach()`

// function mapToJSON(map) {
//   const obj = {};

//   map.forEach((value, key) => {
//     obj[key] = value;
//   });

//   return JSON.stringify(obj);
// }

// const map = new Map([
//   ['name', 'bobby hadz'],
//   ['country', 'Chile'],
// ]);

// const json = mapToJSON(map);

// // 👇️ {"name":"bobby hadz","country":"Chile"}
// console.log(json);

// // 👇️ string
// console.log(typeof json);
