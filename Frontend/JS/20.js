function calculate(a,b, operation){
    return operation(a,b)
}
let result1 = calculate(parseInt(prompt()), parseInt(prompt()), function sum(x,y){ return x + y})
let result2 = calculate(parseInt(prompt()),parseInt(prompt()), function multiple(c,d){return c*d})
console.log(result1)
console.log(result2)
