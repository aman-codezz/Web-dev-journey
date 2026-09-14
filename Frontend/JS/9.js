// ans 1

let numbers = [5, 10, 15, 20, 25];
numbers.forEach(value =>
    console.log(value**2));

// ans 2

let prices = [100, 250, 500, 750];
let result = prices.map(value => (
    value = value + ((value/100)*18)
));
console.log(result);

// ans 3                                                            

let number = [12, 7, 25, 4, 18, 31, 10, 45];
let val = number.filter(value => value>=20);
console.log(val);

// ans 4

let marks = [35, 67, 82, 41, 90, 55, 29, 76];
let pass = marks
.filter(value => value>=50)
.map(value => value + 5);
console.log(pass);

// ans 5
let arr = [2, 3, 4, 5];
let sum = arr.reduce((total, value) => {
    return total + value;
}, 0);

console.log(sum);

// ans 6

let num = [2, 3, 4, 5];
let multi = num.reduce((total, value)=>{
    return total * value
}, 1 );
console.log(multi)

// ans 7 

let word = "JAVASCRIPT";
let words = Array.from(word);
console.log(words)

// ans 8 skiped

// ans 9 

let price = [499, 1200, 299, 999, 1500, 799];
let discount = price
.filter(value=> value <1000)
.map(value => value = value - ((value/100)*10));
console.log(discount);