function asyncOperation(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a > 10) {
                resolve("Success");
            } else {
                reject("Error");
            }
        }, 1000);
    });
}
Promise.all([asyncOperation(15), asyncOperation(20), asyncOperation(50)])
    .then((results) => {
        console.log(results); // Output: ["Success", "Success", "Success"]
    })
    .catch((error) => {
        console.error(error); // Output: "Error"
    });