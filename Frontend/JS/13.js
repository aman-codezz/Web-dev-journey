let contain = document.querySelector(".container")
let first = contain.firstElementChild;
first.hidden= false;
let h1 = document.createElement("h1");
h1.textContent = "this is second heading";
document.body.append(h1);
contain.prepend(h1);

// contain.replaceWith()

contain.insertAdjacentHTML("beforeend",
"<p> hello this is paragraph </p>");

// conatin.toggle()

let btn = document.querySelector(".button");
btn.addEventListener("click", ()=> console.log(document.body.style.color = "grey"));
btn.addEventListener("click", ()=> console.log(document.body.style.backgroundColor = "black"));
let btn2= document.querySelector(".button2");
btn2.addEventListener("click", ()=> console.log(document.body.style.color = "black"))
btn2.addEventListener("click", ()=> console.log(document.body.style.backgroundColor = "white"))
