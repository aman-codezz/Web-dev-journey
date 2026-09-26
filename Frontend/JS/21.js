function array(arr, cb) {
    // arr = []
    return cb(arr)
}
let result = array([6,2,3,4,5], function(item) {
    let square = item.map((val, index, arry) => { return val ** 2 })
    return square
})
console.log(result)