
// Find the sum of digits of given number 


let num = 143;
let sum = 0;

while (num > 0) {
    let rem = num % 10;
    sum = sum + rem;
    num = Math.trunc(num / 10);

}
console.log("The sum of digits is :", sum);