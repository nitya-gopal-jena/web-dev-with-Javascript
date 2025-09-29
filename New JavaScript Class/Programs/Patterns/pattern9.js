
/* Print the below pattern 

    1
    21
    321
    4321
    54321

*/

let res = ""
for (let i = 1; i <= 5; i++) {
    for (let j = i; j >= 1; j--) {
        res += j;
    }
    res += "\n"
}

console.log(res)