function array(arr,cb) {
    let newArry = cb(arr)
    return newArry
}
let result = array([6,2,3,4,5], function(item) {
    let square = item.map((val, index, arry) => { return val ** 2 })
    let double = item.map((val, index, arry) => { return val * 2 })
    return [square, double]
})
console.log(result)