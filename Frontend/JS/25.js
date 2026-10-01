async function main(a) {
    let p1 = await new Promise((resolve, reject) => { 
        setTimeout(() => {
            if (a > 10) {
                resolve("Success");
            } else {
                reject("Error");
            }
        }, 1000);
    });
    return p1
}
async function sec_main() {
    let result = await main(50).catch((error) => error)
    let p2 = new Promise((resolve, reject) =>
        setTimeout(() => { 
            if (result === "Success") {
                resolve("you are verified")
            }
            else if (result == "Error") {
                reject("not verified, try again after some time")
            }
        }, 5000)
    )
    return p2
}

sec_main()
.then((result) => console.log(result))
.catch((error) => console.log(error))