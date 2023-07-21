// const data = ["dog", "wolf", "by", "family", "eaten", "camping"];
// const result = data.filter((d) => d.length >= 5);
// console.log(result);
// function peopleWhoBelongToTheIlluminati(arr) {
//   const result = arr.filter((element) => !element.member);
//   console.log(result);
// }

// peopleWhoBelongToTheIlluminati([
//   { name: "Angelina Jolie", member: true },
//   { name: "Eric Jones", member: false },
//   { name: "Paris Hilton", member: true },
//   { name: "Kayne West", member: false },
//   { name: "Bob Ziroll", member: true },
// ]);

function greaterThan18(element) {
  return element.age > 18;
}
function ofAge(arr) {
  // const result = arr.filter((element) => element.age > 18);
  // console.log(result);
  const result = arr.filter(greaterThan18);
  console.log(result);
}

ofAge([
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 },
]);
