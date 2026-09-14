let card = document.querySelector(".card");
console.log(card.children);
let h1 = (card.firstElementChild);
console.log(h1.nextElementSibling);
let p = (card.children[1]);
console.log(p.parentElement); 



let clas = document.querySelector(".container")
let shadow = clas.firstElementChild;
shadow.style.border= "5px solid black";
document.getElementById(3).style.color="red";
document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor="green"
});
let shadowbox = clas.lastElementChild.previousElementSibling;
shadowbox.style.boxShadow="5px 5px 3px olive";
 