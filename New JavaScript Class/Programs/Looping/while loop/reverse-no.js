let num = 123;
let rev = 0;

while (num > 0) {
    let rem = num % 10;
    rev = (rev * 10) + rem;
    num = Math.trunc(num / 10)
}

console.log('Revrse no is:', rev);
