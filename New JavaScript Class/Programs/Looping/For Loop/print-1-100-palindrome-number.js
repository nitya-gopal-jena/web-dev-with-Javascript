
// Write a program to print palindrome number from 10 to 100 

for (let i = 10; i <= 100; i++) {
    let num = i;
    let rev = 0;
    while (num > 0) {
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.trunc(num / 10)
    }

    if (rev == i) {
        console.log(i);
    }
}