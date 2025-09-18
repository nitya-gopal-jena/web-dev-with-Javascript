// Write a program to check given number is spy number or not ?

// Explanation: If the sum of digits and product of digits is equal then it's called spy number .
// num = 123
//  sum = 1 + 2 + 3 = 6
// prod = 1 * 2 * 3 = 6
//  if(sum == prod) then we called it is a spy no .



let num = 123;
let sum = 0;
let prod = 1;


while (num > 0) {
    let rem = num % 10;
    sum += rem;
    prod *= rem;
    num = Math.trunc(num / 10)

}

if (sum == prod) {
    console.log('The number is spy number');

} else {
    console.log('The number is not spy number');

}