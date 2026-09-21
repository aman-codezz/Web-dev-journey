let container = document.querySelector(".container")
container.style.backgroundColor = "red"
let box = document.querySelector(".box1")
box.addEventListener("click",(e)=>{
    console.log(e.currentTarget.parentElement)
    
})