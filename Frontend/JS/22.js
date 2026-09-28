function main(a){
    return new Promise((resolve, reject) => {
        if(a > 10){
            resolve("Success");
        } else {
            reject("Error");
        }
    })
}
main(15)
    .then((message) => {
        console.log(message); // Output: Success
    })
    .catch((error) => {
        console.error(error); // Output: Error
    });