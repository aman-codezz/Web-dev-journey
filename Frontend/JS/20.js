Array.prototype.myfilter = function(callback) {
    let result = []
    for(let i=0; i<this.length; i++){
        if (callback(this[i], i, this)) {
            result.push(this[i])
        }
    }
    return result
}
let numbers = [10,20,30,40,50,60]
let greaterThanTwenty= numbers.myfilter((num)=>
    {num > 20})
console.log(greaterThanTwenty)
// Custom implementation of Array.prototype.myFilter
// Array.prototype.myFilter = function (callback) {
//     const result = [];

//     // 'this' refers to the array calling myFilter
//     for (let i = 0; i < this.length; i++) {
//         // We pass (currentValue, index, array) just like native Array methods
//         if (callback(this[i], i, this)) {
//             result.push(this[i]);
//         }
//     }

//     return result;
// };

// const numbers = [10, 25, 30, 45, 50];
// const greaterThanTwenty = numbers.myFilter((num) => num > 20);

// console.log(greaterThanTwenty); // [25, 30, 45, 50]
