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
    let result = await main(prompt("Enter a number greater than 10"))
    let p2 = new Promise((resolve, reject) => 
        setTimeout(() => {
            if (result === "Success") {
                resolve("you are verified")
            } else {
                reject("not verified, try again after some time")
            }
        }, 5000)
    )
        return p2
    }
    
sec_main()
            .then((result) => console.log(result))
            .catch((error) => console.log(error))