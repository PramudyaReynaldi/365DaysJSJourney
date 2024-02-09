// Day 02 - Reverse Sequence
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// ------------- Using for loop -------------
// const reverseSeq = (n) => {
//     let arr = [];

//     for(let i = n; i > 0; i--) {
//         arr.push(i);
//     }

//     return arr;
// }

// ------------- Using map method -------------
const reverseSeq = n => Array(n).fill().map((el, idx) => idx + 1).reverse();

console.log(reverseSeq(5));