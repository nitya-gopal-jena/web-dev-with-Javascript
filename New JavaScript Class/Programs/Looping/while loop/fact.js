

let num = 371;
let cnum = num;
let digit = 0;
let sum = 0;

while (num > 0) {
    num = Math.trunc(num / 10)
    digit++;
}

num = cnum;

while (num > 0) {
    let rem = num % 10;
    sum += rem ** digit;
    num = Math.floor(num/10)
}

if (cnum == sum) {
    console.log('The no is factorial no');
    
} else {
    console.log('The no is not factorial');
    
}



