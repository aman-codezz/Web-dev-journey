async function first(a) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(a);
            resolve(a)
        }, 1000);
    })
}
async function main() {
    await first("hello")
    console.log("world")
}
main()