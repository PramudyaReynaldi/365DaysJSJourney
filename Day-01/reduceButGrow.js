// Day 01 - Reduce but Grow
// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

// ------------- Using for loop -------------
// const grow = (x) => {
//     let result = 1;

//     for(let i = 0; i < x.length; i++) {
//         result *= x[i];
//     }
//     return result;
// }

// ------------- Using reduce -------------
// Syntax: array.reduce(callback(total, currentValue, currentIndex, arr), initialValue)
const grow = (x) => x.reduce((a, b) => a * b);

console.log(grow([1, 2, 3]));
console.log(grow([4, 1, 1, 1, 4]));
console.log(grow([2, 2, 2, 2, 2, 2]));