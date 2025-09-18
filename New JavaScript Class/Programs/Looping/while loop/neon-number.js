
// Write a program to check the given number is neon number or not ?

// Explanation: The sum of the digits of its square is equal to the number itself .

let num = 9;
let sum = 0;

let mul = num * num;
while (mul > 0) {
    let rem = mul % 10;
    sum = sum + rem;
    mul = Math.trunc(mul / 10)
}

if (num == sum) {
    console.log('No is neon');

} else {
    console.log('No is not neon');

}