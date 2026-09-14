let obj = {
    1: "black",
    2: "green",
    3: "yellow",
    4: "red",
    5: "blue",
    6: "violet",
    7: "grey",
    8: "purple",
    9: "olive",
    10: "orange"
}
let random = document.getElementsByClassName("box")
for (let i = 0; i < random.length; i++) {
    random[i].style.backgroundColor = (obj[parseInt(Math.random() * 10 + 1)]);
    random[i].style.color = (obj[parseInt(Math.random() * 10 + 1)]);
}