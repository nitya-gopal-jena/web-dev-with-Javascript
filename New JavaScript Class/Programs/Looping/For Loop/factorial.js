
// Write a program to check the factorial of given number ?
// Explanation: Formula: num = 5;  5*4*3*2*1 


let num = 5;
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
}

if (factorial > 0) {
    console.log(`Factorial of ${num} is: ${factorial}`);

} else {
    console.log(`Factorial is not defined for ${num}`);
}