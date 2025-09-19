// Write a program to find the number of digits in a given number ?


let num = 143;
let count = 0;

while (num > 0) {
    num = Math.trunc(num / 10)
    count++;
}

console.log(count);

