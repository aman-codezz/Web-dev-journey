// // ans 5

function sum(a){
    return new Promise((resolve, reject)=>{
        resolve(a)
    })
}
sum(10)
.then((element)=>{
     return element*2
})
.then((element)=>{
     return element+5
})
.then((element)=>{
    console.log(element)
})

// ans 6

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 2000);
});

p.then(result => {
    // console.log(result);
    return result * 2;
})
.then(result => {
    // console.log(result);
    return result + 10;
})
.then(result => {
    console.log(result);
});

let o = new Promise((resolve, reject) => {
    resolve("A");
    resolve("B");
    reject("C");
});

o.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});