// async function elegibility() {
//     let x = await fetch('https://dummyjson.com/image/150')
//     let data = await x.text;
//     console.log(data)
//     return data
// }
// console.log("funtion is starting from there")
// async function main() {
//     let data = await elegibility()
//     console.log("data retrived")
// }
// main()
async function num(){
    console.log("function is ending from there")
}
console.log("ista ")
async function main(){
let data = await num()
console.log(data)
console.log("function is starting from there")
}
main()