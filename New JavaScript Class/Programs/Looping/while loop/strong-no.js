
// Wap to check the given number is strong number or not ?
// Explanation: If the sum of factorial of each digits is equal to given number called strong number 

let num = 145;
let temp = num;
let sum = 0;


while (num > 0) {
    let rem = num % 10;
    let fact = 1;
    for (let i = 1; i<=rem; i++){
        fact = fact * i;
    }
    sum = sum + fact;
    num = Math.trunc(num /10)
}

if (temp == sum) {
    console.log('strong');
    
} else {
    console.log('not strong');
    
}
