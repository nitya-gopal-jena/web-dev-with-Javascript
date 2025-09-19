
// Wap to check the given number is palindrome or not ?



let num = 123;
let rev = 0;
let temp = num;
let rem;

while (num > 0) {
    rem = num % 10;
    rev = (rev * 10) + rem;
    num = Math.trunc(num / 10)
}
if (temp == rev) {
    console.log(`The ${temp} is palindrome`);

} else {
    console.log(`The ${temp} is not palindrome`);

}