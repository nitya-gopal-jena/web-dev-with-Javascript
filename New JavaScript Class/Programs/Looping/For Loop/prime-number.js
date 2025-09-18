
// write a program to check if the given number is prime or not ?

// Explanation: If the number is divisible by only 1 and itself then it called prime number.



// Method 1:-

let num = 6;
let count = 0;

for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        count++;
    }
}

if (count == 2) {
    console.log('The no is prime ');

} else {
    console.log('The no is not prime');

}





// Method 2:-

let num1 = 5;
let count1 = 0;

for (let i = 2; i < num1; i++) {
    if (num1 % i == 0) {
        count1++;
    }
}

if (count1 == 0) {
    console.log('The no is prime ');
} else {
    console.log('The no is not prime');
}




// Method 3:-
// Best approach to write prime number 

let num2 = 7;
let flag = false;

if (num2 <= 1) {
    console.log('The number is not a prime number');

} else {
    for (let i = 2; i <= num2 / 2; i++) {
        if (num2 % i == 0) {
            flag = true;
            break;
        }
    }

    if (!flag) {
        console.log('The no is prime number');

    } else {
        console.log('The no is not prime number');

    }
}


