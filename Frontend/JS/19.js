let container = document.querySelector(".container")
container.style.backgroundColor = "red"
let box = document.querySelector(".box1")
box.addEventListener("click", function(e){
    console.log(e.currentTarget.parentElement)
    
})
document.addEventListener("click", function(e){
    console.log(e.clientX, e.clientY)
})  

let letter = document.querySelector("#letter")
letter.addEventListener("keydown", (e)=>{
    console.log(e.key)
})