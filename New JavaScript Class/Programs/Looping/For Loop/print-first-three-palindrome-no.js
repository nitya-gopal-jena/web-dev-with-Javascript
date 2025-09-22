
// Write a program to print first three palindrome number 

let count = 0;
for (let i = 10; i <= 100; i++) {
    let num = i;
    let rev = 0;
    while (num > 0) {
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.trunc(num / 10)
    }
    if (rev == i) {
        count++;
        console.log(i);
        if (count == 3)
            break;

    }
}