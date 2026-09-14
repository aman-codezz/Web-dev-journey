// let n = 19373;
// let count = 0;
// for (let i =0; i<=n; i++){
//     if(n%(i+1)===0){
//         count++;
//     }
// }
// if(count==2){
//     console.log(n,": prime");
// }
// else{
//     console.log(n,": not prime");
// }

function isPalindrome(x) {
  x = String(x)
for (let i = 0, z = x.length - 1; i<x.length, z>=0 ; i++, z--) { 
      if (x[i] === x[z]) {
      }
      else {
        return false;
      }
    }
  return true;
}
console.log(isPalindrome(-121))