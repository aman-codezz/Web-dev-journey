let a = 2;
for (let i = 2; i <22; i+=2) {
    console.log(i);  
}
let obj={
    Name: "Aman",
    Age: 20,
    skills: "web dev"
}

for (key in obj) {
    console.log(key );
}
for (key in obj) {
    console.log(obj[key] );
}
let arry =["Aman", "amit", "tarun"];
for (element of arry) {
    console.log(element);
}
let j =0;
while (j<=40) {
    console.log(j);
    j+=4;
}
let k =1;
do {
    console.log(k);
    k+=3;
} 
while (k==0);