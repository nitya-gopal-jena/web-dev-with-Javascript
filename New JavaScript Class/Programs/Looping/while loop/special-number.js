
// Write a program to check the given number is special number or not ?

// Explanation: The sum of factorial of all digits is equal to the original number  
// OR
// The sum of all digits and multiplication of all digits , sum of both (sum of digits + multiplication of digits) is equal to the original number 

let num = 59;
let sum = 0;
let multiply = 1;
let temp = num;

while (num > 0) {
    let rem = num % 10;
    sum = sum + rem;
    multiply = multiply * rem;
    num = Math.trunc(num / 10);

}

if (temp == sum + multiply) {
    console.log('No is special number');
} else {
    console.log('No is not special number');

}
