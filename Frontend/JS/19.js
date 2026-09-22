let container = document.querySelector(".container")
container.style.backgroundColor = "red"
document.addEventListener("click", function(e){
    console.log(e.clientX, e.clientY)
})  

let letter = document.querySelector("#letter")
letter.addEventListener("keydown", (e)=>{
    console.log(e.key)
})