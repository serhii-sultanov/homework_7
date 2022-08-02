"use strict";

// 1
function sumTo(n) {
  if (n === 1) {
    return n;
  }
  return n + sumTo(n - 1);
}

console.log(sumTo(4));
console.log(sumTo(3));

const sumToShort = (n) => (n === 1 ? n : n + sumToShort(n - 1));

console.log(sumToShort(4));
console.log(sumToShort(3));

// 2
const sentance = "Lorem ipsum dolor sit amet";

function findShort(string) {
  const shortestWord = string.split(" ").sort((a, b) => a.length - b.length);
  return shortestWord[0];
}

console.log(findShort(sentance));
console.log(findShort("Hello world"));
console.log(findShort("Hi"));
console.log(findShort("She is David's sister"));
