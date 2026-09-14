// video 56 practice questions set
// question 1
let a = 5;
if (a>=10 && a<=20){
    console.log("the person is livee between 10 to 20");
}
else{
    console.log("is not lying between 10 to 20");
}
// question 2
let age=18;
switch (age) {
    case 16:
        console.log("u are under age")
        break;
    case 17:
        console.log("still underage")
        break;
    case 18:
        console.log("u can apply for dl")
        break;
    case 19:
        console.log("u must have dl")
    default:
        console        
        break;
}
// question 3 and 4
let b= 15;
if(b%2==0 && b%3==0){
    console.log("this is divisible by 2 and 3")
}
else if (b%2==0 || b%3==0) {
    console.log("its is divisible by 3 or 2")    
} 
else{
    console.log("its not divisible by 2 and 3")
}
// question 5
let age2=21;
console.log(age2>=18 && age2<=20? "you can drive": "you cannot drive");