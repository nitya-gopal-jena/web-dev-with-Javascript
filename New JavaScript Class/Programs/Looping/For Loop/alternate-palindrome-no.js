
// Write a program to print alternate palindrome number

// Explanation: print palindrome no one after another . (11, 33, 55) like this

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

        if (count % 2 !== 0)
            console.log(i);
    }
}