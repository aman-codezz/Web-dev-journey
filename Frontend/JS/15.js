// function getdata(callback) {
//     console.log("start")
//     setTimeout(() => {
//         let user = {
//             name: "Aman",
//             age: 19
//         }
//         callback(user)
//     });
//     console.log("here we go!!!")
// }
// function retrived(user){
//     console.log(user)
// }
// getdata(retrived)




// function getUser(callback) {
//     let user = {
//         name: "Aman"
//     };

//     callback(user);
// }

// getUser(function(user) {
//     console.log(user.name);
// });
// function getdata(){
//     return new Promise((resolve, reject)=>{
//         let user = {
//             name : "amit"
//         }
//         if(user.name == "aman"){
//             resolve("runs sucessfully " + user.name)
//         }
//         else{
//             reject("error")
//         }
//     })
// }
// getdata()
// .then(function(result){
//     console.log(result)
// })
// .catch(function(err){
//     console.log(err)
// })


// ans 1

function checkage(age){
    return new Promise((resolve, reject)=>{
        if (age >= 18){
            resolve("Eligible")
        }
        else{
            reject("not elegible")
        }
    })
}
checkage(prompt("Enter your age"))
.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})

// ans 2

function object(){
    return new Promise ((resolve, reject)=>{
        let student = {
            name: "Aman",
            cource: "Btech cse",
            semester: 1
        }
        resolve(student)
        reject("Not found")
    })
}
object()
.then((student)=>{
    console.log(student.name + " -", student.cource)
})
.catch((err)=>{
    console.log(err)
})

// ans 3

function timeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let students = {
                name: "Aman",
                cource: "Btech cse",
                semester: 1
            }
            resolve(students)
        }, 2000);
        // reject("Not found")
    })
}
timeout()
    .then((students) => {
        console.log(students)
    })
// .catch((err)=>{
//     console.log(err)
// })

// ans 4

function login(username, password) {
    return new Promise((resolve, reject) => {
        if (username == "aman" & password == 1234){
            resolve("login sucessfull")
        }
        else{
            reject("login failed")
        }
    })

}
login(prompt("enter username"), prompt("password"))
.then((logedin)=>{
    console.log(logedin)
})
.catch((err)=>{
    console.log(err)
})