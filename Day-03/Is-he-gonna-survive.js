// Is he gonna survive?
// https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript

// ------------- Solve 1 -------------
// const hero = (bullets, dragons) => {
//     if(bullets >= dragons * 2) {
//         return true
//     } else {
//         return false
//     }
// }

// ------------- Solve 2 -------------
// const hero = (bullets, dragons) => {
//     if(bullets / 2 >= dragons) {
//         return true
//     } else {
//         return false
//     }
// }

// ------------- Solve 3 -------------
// const hero = (bullets, dragons) => bullets / 2 >= dragons ? true : false

// ------------- Solve 4 -------------
const hero = (bullets, dragons) => bullets >= dragons * 2


console.log(hero(10, 5));
console.log(hero(7, 4));
console.log(hero(4, 5));
console.log(hero(100, 40));
console.log(hero(1500, 751));
console.log(hero(0, 1));