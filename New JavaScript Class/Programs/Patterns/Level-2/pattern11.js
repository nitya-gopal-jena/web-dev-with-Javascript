
/* Print  the below pattern

    *
   **
  ***
 ****
*****

*/


let n = 5;
let res = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= n - i; j++) {
        res += " "
    }

    for (let j = 1; j <= i; j++) {
        res += "*"
    }

    res += '\n'
}

console.log(res);
