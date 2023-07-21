const array = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(array);

const target = 40;
const result1 = array.includes(target);
const result11 = array.indexOf(target);
const result111 = array.some(target);
console.log(result11, result1, result111);
