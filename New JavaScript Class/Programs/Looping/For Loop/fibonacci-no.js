

// Wap to find the fibonacci series of a given number ?

let num = 10;
let a = 0;
let b = 1;

console.log(a);
console.log(b);

for (let i = 2; i <= num; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}
console.log(b);


