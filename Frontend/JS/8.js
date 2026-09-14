// let a = [1, 2, 4, 2, 4, 5, 8, 6, 0];
// let a2 = [11, 27, 64, 3, 4, 23, 4];
// let a3 = [33, 22, 55, 45];
// let a4 = (a.concat(a2, a3));
// a4.sort((a, b) => a - b);
// console.log(a4);
// // a4=a4.toString();
// console.log(a4);
// a3.reverse(); /* only for array not for string*/
// console.log(a3);
// // talk on for each loops
// a4.forEach((value, index, a4) => {
//     console.log(index, value)
// });
// let b = [2, 4, 6, 7, 8, 9, 10];
// let result = b.map(value => {
//     return parseFloat(value ** 2)
// });
// console.log(result);
// let marks = [35, 72, 48, 91, 63, 28, 84, 55, 19, 76];
// let pass = marks
//     .filter(value => value >= 50)
//     .map(value => value + 10);
// console.log(pass);

// factorial
// let a = 6;
// function factorial(n) {
//     let sum = 1;
//     for (let i = 0; i < n; i++) {
//         sum = sum * (i + 1);
//     }
//     return sum
// }
// let result = factorial(a)
// console.log(result);

// factorial with reduce method
let a  = 6;
function factreduce(n){
    let arry = Array.from(Array(n+1).keys())
    console.log(arry)
    let c = arry.slice(1,).reduce((a,b) => a*b);
    return c
}
let re = factreduce(a);
console.log(re)