// write a program to count the number of digits in a given number?

let num = 143;
let count = 0;

for (let n = num; n>0;   n=Math.trunc(n / 10)){
    count++
}

console.log(count);