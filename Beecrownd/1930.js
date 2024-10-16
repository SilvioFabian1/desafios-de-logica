const str = "2 2 2 2";
const array = str.split(" ");
let acc = 0;

array.forEach((item, index, arr) => {
  acc = index === arr.length - 1 ? (acc += +item) : (acc += +item - 1);
});
console.log(acc);
