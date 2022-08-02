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
