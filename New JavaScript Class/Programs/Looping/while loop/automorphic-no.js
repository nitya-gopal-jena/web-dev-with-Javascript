// Wap to check the given number is Automorphic number or not ?
// Explanation: The last digit of square of the number is equal to the last digit of the given .

/* suppose the no is 25 when we find the square the value is 625 , here the last digit is 5 and the last digit of given 
 no is also 5 so this is called automorphicnumber */

let num = 5;
let temp = num;
let i = 1;

let squar = temp * temp;

while (num > 0) {
    i = i * 10;
    num = Math.trunc(num / 10);
}
if (squar % i == temp) {
    console.log('Automorphic no');
} else {
    console.log('Not Automorphic no');
}
