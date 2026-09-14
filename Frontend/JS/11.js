let list = document.querySelector(".list");
let first = list.firstElementChild.style.backgroundColor= "red";

let table = document.querySelector("table");
if (table.tHead) {
    console.log("thead present")
}
else{
    console.log("thead not present");
    console.log("tbody not present");
}
if(table.tBodies){
    console.log("tbody present")
}
else{
    console.log("tbody not present");
}
let element = document.querySelector(".elements")
let first_element = element.firstElementChild.style.backgroundColor = "red";
let last_element = element.lastElementChild.style.backgroundColor = "green";

let tag = document.getElementsByTagName("li");
for(let i = 0; i < tag.length; i++){
    tag[i].style.backgroundColor= "black";
}
