// Practice set 3-->
// question 1
let obj = { harry: 98, rohan: 70, akash: 75 };
let keys= Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
    console.log(obj[keys[i]]);
}
// question 2
let obj2 = { harry: 98, rohan: 70, akash: 75 };
for (const key in obj2) {
   console.log([key])
}
// question 3
for (let i = 0; i = true; i++) {
    let a = Number(prompt("Enter a number"));
    if ( a !== 2) {
        console.log("try again");
        continue;
    }
    else {
        console.log("this is 2");
        break;
    }
}
// question 4
function mean(a) {
    let sum = 0;
    let count = 0;
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        count++
        sum = sum + a[i];

    }
    result = sum / count;
    return result;
}
console.log(mean([20, 30, 40]));