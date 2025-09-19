
// Wap to find out the sum of last and first digit of a given number ?

let num = 124;
let sum = 0;

sum += num % 10;

while (num > 9) {
    num = Math.trunc(num / 10);
}

sum = sum + num;
console.log(sum);
