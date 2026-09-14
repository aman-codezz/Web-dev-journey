/*Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub*/
let adjectives = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}
let shopNames = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
}
let anotherWords = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
}
console.log(adjectives[parseInt(Math.random() * 3 + 1)] + " "
 + shopNames[parseInt(Math.random() * 3 + 1)] + " "
  + anotherWords[parseInt(Math.random()*3+1)]);

// another way tto generate business name below
let adjectivess={
    adjective1:"Crazy",
    adjective2:"Amazing",
    adjective3:"Fire"
}
let shopNamess={
    shopName1:"Engine",
    shopName2:"Foods",
    shopName3:"Garments"
}
let anotherWordss={
    anotherWord1:"Bros",
    anotherWord2:"Limited",
    anotherWord3:"Hub"
}
console.log(adjectivess["adjective"+parseInt(Math.random()*3+1)]+" "
+shopNamess["shopName"+parseInt(Math.random()*3+1)]+" "
+anotherWordss["anotherWord"+parseInt(Math.random()*3+1)]);