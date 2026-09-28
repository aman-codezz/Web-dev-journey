async function main(a) {
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

main(15)
    .then((message) => {
        console.log(message); // Output: Success
    })
    .catch((error) => {
        console.error(error); // Output: Error
    });