// Day 01 - Reverse String
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

// ------------- Using for loop -------------
// const solution = (str) => {
//     let reverse = '';

//     for(let i = str.length - 1; i >= 0; i--) {
//         reverse += str[i];
//     }
// }

// ------------- Using reverse method -------------
const solution = (str) => str.split('').reverse().join('');

console.log(solution("hello"));
console.log(solution("world"));
